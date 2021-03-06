import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeedataService {
  private _url: string = '/copartLTA/rest/api/v1/lta/login'; // <replace json file URL with rest api URL for auth>
  private _baseUrl: string = '/copartLTA/rest/api/v1/lta';
  private _addUrl: string = '/copartLTA/rest/api/v1/lta/addUser';
  private _saveUrl: string = '/copartLTA/rest/api/v1/lta/editUser';
  private _empdataUrl: string = '/copartLTA/rest/api/v1/lta/listUser';
  private _ApplyLeaveUrl: string = '/copartLTA/rest/api/v1/lta/applyLeave';
  private _ApproveRejectLeaveUrl: string = '/copartLTA/rest/api/v1/lta/aprroveReject';
  private _DeleteuserUrl: string = '/copartLTA/rest/api/v1/lta/deleteUser';
  private _ApproveRejectListUrl: string = '/copartLTA/rest/api/v1/lta/ApproveRejectList';
  private _ManagersListUrl: string = '/copartLTA/rest/api/v1/lta/managers';
  private _OnsiteManagersListUrl: string = '/copartLTA/rest/api/v1/lta/onsitemanagers';
  private _ResetPasswordUrl: string = '/copartLTA/rest/api/v1/lta/resetPassword';
  private _deleteOnsiteManagerUrl: string = '/copartLTA/rest/api/v1/lta/deleteOnsiteManager';
  private _saveOnsiteManagerUrl: string = '/copartLTA/rest/api/v1/lta/editOnsiteManager';
  private _addOnsiteManagerUrl: string = '/copartLTA/rest/api/v1/lta/addOnsiteManager';
  private _deleteManagerUrl: string = '/copartLTA/rest/api/v1/lta/deleteManager';
  private _saveManagerUrl: string = '/copartLTA/rest/api/v1/lta/editManager';
  private _addManagerUrl: string = '/copartLTA/rest/api/v1/lta/addManager';
  private _getAllLeaveHistory :string ='/copartLTA/rest/api/v1/lta/listAllLeavesApplied'
  constructor(
    private _router: Router, private _http: Http) { }


  getEmployees(opt) {
    //Change the following method to post for server authentication.
    return this._http.post(this._url, opt)
      //return this._http.get(this._url)
      .map((response: Response) => response.json());

  }
  saveRetur(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._addUrl, data, headers)
      .map((res: Response) => res.json());
  }
  LeaveRetur(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._ApplyLeaveUrl, data, headers)
      .map((res: Response) => res.json());
  }
  savedata(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._saveUrl, data, headers)
      .map((res: Response) => res.json());
  }
  deletedata(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._DeleteuserUrl, data, headers)
      .map((res: Response) => res.json());
  }

  getLeaves(empid, reqType) {
    return this._http.get(this._baseUrl + "/listLeavesApplied?empId=" + empid + "&requestType=" + reqType)
      .map((response: Response) => response.json().body);
  }
  getEmployeeData() {
    return this._http.get(this._empdataUrl)
      .map((response: Response) => response.json().body);

  }
  ApproveRejectLeave(status, reqId) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._ApproveRejectLeaveUrl + "?reqId=" + reqId + "&status=" + status, headers)
      .map((res: Response) => res.json());
  }
  getLeavesApproveReject(empid, reqType) {
    return this._http.get(this._ApproveRejectListUrl + "?empId=" + empid + "&requestType=" + reqType)
      .map((response: Response) => response.json().body);
  }
  resetPassword(oldpassword, password) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._ResetPasswordUrl + "?oldpassword=" + oldpassword + "&password=" + password, headers)
      .map((res: Response) => res.json());
  }

  getManagers() {
    return this._http.get(this._ManagersListUrl)
      .map((response: Response) => response.json().body);

  }
  getOnsiteManagers() {
    return this._http.get(this._OnsiteManagersListUrl)
      .map((response: Response) => response.json().body);

  }
  saveOnsiteManagerDetails(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._saveOnsiteManagerUrl, data, headers)
      .map((res: Response) => res.json());
  }
  deleteOnsiteManagerDetails(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._deleteOnsiteManagerUrl, data, headers)
      .map((res: Response) => res.json());
  }

  addOnsiteManager(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._addOnsiteManagerUrl, data, headers)
      .map((res: Response) => res.json());
  }
 
saveManagerDetails(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._saveManagerUrl, data, headers)
      .map((res: Response) => res.json());
  }
  deleteManagerDetails(data: any) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this._http.post(this._deleteManagerUrl, data, headers)
      .map((res: Response) => res.json());
  }

  addManager(resourceManagerName,resourceManagerDept,resourceManagerEmpCode) {
    console.log('Finished');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   
    return this._http.post(this._addManagerUrl + "?resourceManagerName=" + resourceManagerName + "&resourceManagerDept=" + resourceManagerDept+ "&resourceManagerEmpCode=" + resourceManagerEmpCode, headers)
      .map((res: Response) => res.json());
  }
  getAllLeavesHistory(fromDate, toDate) {
    return this._http.get(this._getAllLeaveHistory + "?fromDate=" + fromDate + "&toDate=" + toDate)
      .map((response: Response) => response.json().body);
  }

}
