import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DetectBreakpointsService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  getDeviceType(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map((result: BreakpointState) => result.matches));
  }
}
