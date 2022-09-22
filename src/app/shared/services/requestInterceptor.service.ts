import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TokenService } from 'src/app/shared/services/token.service'

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  constructor (
    private tokenService: TokenService
  ) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken()

    if (token) {
      req = req.clone({ setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      } })
    }

    return next.handle(req)
  }
}
