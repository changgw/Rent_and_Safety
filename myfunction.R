#to run
# source('myfunction.R')
# krig(38.93,-77.3)
krig <- function(a,b){
library('geoR')
# load data
dat.ash <- read.table('data_spatial_min_max_na.txt')
dat.m <- as.matrix(dat.ash)
plot_col<-8
# plot data and get the semiviagram
#p.plot <-plot.geodata(coords = dat.m[,2:3],data=dat.m[,plot_col])
# # training
# dat.ml <- likfit(coords=dat.m[,2:3], data=dat.m[,8], fix.nugget=T, 
#                   ini=c(.5,.5),
#                   trend ="cte", lik.method='ML',cov.model="exponential")
#
## GOT cov.pars=c(1.229,0.0028)
#predict 
loci<- c(a,b)
dat.kmin <- ksline(coords=dat.m[,2:3], data=as.vector(dat.m[,6]),
                 locations=loci, cov.pars=c(1.602341e+05,2.383594e-03), nugget=0,
                 cov.model="matern", kappa=.5, m0="ok")
dat.kmax <- ksline(coords=dat.m[,2:3], data=as.vector(dat.m[,7]),
                 locations=loci, cov.pars=c(4.398135e+06,9.219022e-04), nugget=0,
                 cov.model="matern", kappa=.5, m0="ok")

return(list(dat.kmin$predict,dat.kmax$predict))
}


