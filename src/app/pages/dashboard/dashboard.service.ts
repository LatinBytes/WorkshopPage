// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_PERFIL_URL = environment.baseApi + '/dashboard';

@Injectable()
export class PerfilService {
	constructor(private http: HttpClient) { }

	// CREATE =>  POST: add a new productoServicio to the server
	createPerfil(productoServicio: any): Observable<any> {
		return this.http.post<any>(API_PERFIL_URL, productoServicio);
	}

	// READ
	getAllPerfiles(): Observable<any[]> {
		return this.http.get<any[]>(API_PERFIL_URL);
	}

	getPerfilById(cvePerfil: number): Observable<any> {
		return this.http.get<any>(API_PERFIL_URL + `/${cvePerfil}`);
	}

	// UPDATE => PUT: update the productoServicio on the server
	updatePerfil(productoServicio: any): Observable<any> {
		return this.http.put(API_PERFIL_URL + `/${productoServicio.cvePerfil}`, productoServicio);
	}

	// DELETE => delete the productoServicio from the server
	deletePerfil(customerId: number): Observable<any> {
		const url = `${API_PERFIL_URL}/${customerId}`;
		return this.http.delete<any>(url);
	}
}