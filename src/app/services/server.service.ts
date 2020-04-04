import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Need, Needs, NeedUpdate, Towns, Offer, Offers, OfferUpdate, User, IdUsers, IdUser, IdUserUpdate } from '../model/api.model';
import { Request } from '../model/request.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  getTowns(): Promise<Towns> {
    return new Request<Towns>(this.http).get('/towns');
  }

  getTownsByZipcode(zipcode: string): Promise<Towns> {
    return new Request<Towns>(this.http).get(`/towns/${zipcode}`);
  }
  
  
  
  postNeed(need: Need): Promise<any> {
    return new Request<any>(this.http).post('/needs', need)
  }

  getNeeds(): Promise<Needs> {
    return new Request<Needs>(this.http).get('/needs');
  }
  
  getNeedById(id: string): Promise<Need> {
    return new Request<Needs>(this.http).get(`/needs/${id}`);
  }
  
  patchNeedById(id: string, need: NeedUpdate): Promise<any> {
    return new Request<any>(this.http).patch(`/needs/${id}`, need);
  }
  
  
  
  postOffer(offer: Offer): Promise<any> {
    return new Request<any>(this.http).post('/offers', offer)
  }

  getOffers(): Promise<Offers> {
    return new Request<Offers>(this.http).get('/offers');
  }
  
  getOfferById(offerId: string): Promise<Offer> {
    return new Request<Offer>(this.http).get(`/offers/${offerId}`);
  }
  
  patchOfferById(offerId: string, offer: OfferUpdate): Promise<any> {
    return new Request<any>(this.http).patch(`/offers/${offerId}`, offer);
  }
  
  
  
  postUser(user: User): Promise<string> {
    return new Request<string>(this.http).post('/users', user)
  }
  
  getUsers(authHeader: string): Promise<IdUsers> {
    return new Request<IdUsers>(this.http).get('/users', authHeader);
  }
  
  getUserById(authHeader: string, userId: string): Promise<IdUser> {
    return new Request<IdUser>(this.http).get(`/users/${userId}`, authHeader);
  }
  
  getUserMe(authHeader: string): Promise<IdUser> {
    return new Request<IdUser>(this.http).get(`/users/me`, authHeader);
  }
  
  patchUserMe(authHeader, me: IdUserUpdate): Promise<any> {
    return new Request<any>(this.http).patch(`/users/me`, authHeader, me);
  }
  
  postRequestAccessById(authHeader: string, userId: string): Promise<any> {
    return new Request<any>(this.http).post(`/requestAccess/${userId}`, authHeader)
  }
  
}
