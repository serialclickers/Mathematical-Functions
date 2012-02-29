function PMT (ir, np, pv, fv, mtype ) {
 /*
 ir - interest rate per month
 np - number of periods (months)
 pv - present value
 fv - future value (residual value)
 */

 pmt = ( ir * ( pv * Math.pow ( (ir+1), np ) + fv ) ) / ( ( ir * mtype + 1 ) * ( Math.pow ( (ir+1), np) -1 ) );

 return pmt;
}
