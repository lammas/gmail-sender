import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private baseUrl: string = './api/v1';
	public key: string = '';

	private getHeaders() {
		let headers = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
		if (this.key && this.key.length > 0) {
			headers = headers.set('Authorization', this.key);
		}
		return headers;
	}

	constructor(private http: HttpClient) {
		let key = localStorage.getItem('apiKey');
		if (key)
			this.key = key;
	}

	public isAuthenticated() {
		return !!this.key;
	}

	public setKey(key: string) {
		this.key = key;
		localStorage.setItem('apiKey', this.key);
	}

	public logout() {
		this.key = '';
		localStorage.removeItem('apiKey');
	}

	get(url: string): Observable<Object> {
		let result = this.http
			.get(`${this.baseUrl}/${url}`, { headers: this.getHeaders(), withCredentials: true });
		return result;
	}

	getText(url: string): Observable<Object> {
		let result = this.http
			.get(`${this.baseUrl}/${url}`, { headers: this.getHeaders(), withCredentials: true, responseType: 'text' });
		return result;
	}

	post(url: string, body: any): Observable<Object> {
		let result = this.http
			.post(`${this.baseUrl}/${url}`, body, { headers: this.getHeaders(), withCredentials: true });
		return result;
	}

	put(url: string, body: any): Observable<Object> {
		let result = this.http
			.put(`${this.baseUrl}/${url}`, body, { headers: this.getHeaders(), withCredentials: true });
		return result;
	}

	delete(url: string): Observable<Object> {
		let result = this.http
			.delete(`${this.baseUrl}/${url}`, { headers: this.getHeaders(), withCredentials: true });
		return result;
	}

	patch(url: string, body: any): Observable<Object> {
		let result = this.http
			.patch(`${this.baseUrl}/${url}`, body, { headers: this.getHeaders(), withCredentials: true });
		return result;
	}

	head(url: string): Observable<Object> {
		let result = this.http
			.head(`${this.baseUrl}/${url}`, { headers: this.getHeaders(), withCredentials: true });
		return result;
	}
}
