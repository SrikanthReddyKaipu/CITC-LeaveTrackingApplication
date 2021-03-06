import { Component } from '@angular/core';
import { EmployeedataService } from '../app.service';
import { EmpDataService } from '../app.model';
import { ToasterContainerComponent, ToasterService, Toast, ToasterConfig } from 'angular2-toaster';




@Component({
    templateUrl: './app.admin.component.html',
    providers: [EmployeedataService]
})

export class AdminComponent {
    public employee: any;
    public editedIndex: boolean;
    public EmployeeId: any = {};
    public leaveHistory: any;
    cancelRequest: boolean = false;
    userFilter: any = { employeeName: '' };


    constructor(public _service: EmployeedataService,
        public empDataSr: EmpDataService,
        public toasterService: ToasterService) {

    }
    ngOnInit() {
        this.EmployeeId = this.empDataSr.getEmpInfo();
        this.getLeaveRequests();
        this.getLeaveRequestHistory();
       
    }
    approveRejectAction(index: any, status) {
        this.empDataSr.loading = true;
        this._service.ApproveRejectLeave(status, this.employee[index].reqId)
            .subscribe((res) => {
                if (res.header && res.header == 'Ok') {
                    this.getLeaveRequests();
                    this.getLeaveRequestHistory();
                    this.empDataSr.loading = false;
                    this.popToastSuccess();
                } else {
                    this.empDataSr.loading = false;
                    this.popToastFailed();
                }
            });
    }
    cancelLeaveAction(index: any, status) {
        if (window.confirm("Are you sure want to Cancel") && this.leaveHistory[index].status === "Approved") {
            this.empDataSr.loading = true;
            this._service.ApproveRejectLeave(status, this.leaveHistory[index].reqId)
                .subscribe((res) => {
                    if (res.header && res.header == 'Ok') {
                        this.getLeaveRequests();
                        this.getLeaveRequestHistory();
                        this.empDataSr.loading = false;
                        this.popToastSuccess();
                    } else {
                        this.empDataSr.loading = false;
                        this.popToastFailed();
                    }
                });

        } else {
            this.popToastFailed();
        }


    }
    get isManager() {
        return this.empDataSr.isManager;
    }

    getLeaveRequests() {
        this._service.getLeaves(this.EmployeeId.empCode, "A")
            .subscribe(data => this.employee = data);
    }

    getLeaveRequestHistory() {
        this._service.getLeavesApproveReject(this.EmployeeId.empCode, "A")
            .subscribe(data => {
            this.leaveHistory = data;
                var today = new Date().getTime();
               for (var i = 0; i < this.leaveHistory.length; i++) {
                    if (this.leaveHistory[i].status === 'Rejected' || this.leaveHistory[i].status ==='Cancelled' || today > new Date(this.leaveHistory[i].toDate).getTime()) {
                        this.leaveHistory[i].cancelRequest = true;
                    } else {
                        this.leaveHistory[i].cancelRequest = false;
                    }
                }
            });
    }
    popToastSuccess() {
        var toast: Toast = {
            type: 'success',
            title: 'Your request has been done successfully',
            body: 'Thank you'
        };

        this.toasterService.pop(toast);
    }
    popToastFailed() {
        var toast: Toast = {
            type: 'error',
            title: 'Error in while submitting your request',
            body: 'Thank you'
        };

        this.toasterService.pop(toast);
    }
   
}
