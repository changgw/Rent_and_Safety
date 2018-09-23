library('geoR')
# load data
coal.ash <- read.table('data_spatial_min_max.csv')
coal.m <- as.matrix(coal.ash)
# plot data and get the semiviagram
plot.geodata(coords = coal.m[,2:3],data=coal.m[,4])
# produce varigram cloud
cloud1 <- variog(coords = coal.m[,2:3],data=coal.m[,4],option = 'cloud',type='robust')
par(mfrowc(1,2))
plot(cloud1)
#produce binned varigram
bin3 <- variog(coords = coal.m[,2:3],data=coal.m[,4],bin.cloud=T)
plot(bin3)
plot(bin3,bin.cloud=T)

wls <- variofit(bin3,ini.cov.pars = c(0.5,3),nugget = 0, cov.model = 'exponential')
wls$nugget
wls$cov.pars
# To obtain in the REML and ML Estimators
coal.ml <- likfit(coords=coal.m[,2:3], data=coal.m[,4], fix.nugget=T, 
                  ini=c(.5,.5),
                  trend ="cte", lik.method='ML', cov.model="exponential")
summary(coal.ml)

coal.reml <- likfit(coords=coal.m[,2:3], data=coal.m[,4], fix.nugget=T, 
                    ini=c(.5,.5),
                    trend ="cte", lik.method='REML', cov.model="exponential")
summary(coal.reml)

## EXERCISE 4: PROFILE LIKELIHOOD

sill.values <- seq(0.1,5,length=5) 
range.values <- seq(0.1,3,length=5)
expand.grid(sill.values, range.values)->grid
sillrange.m <- matrix(c(as.matrix(grid)),ncol=2,byrow=F)


coal.ml <- likfit(coords=coal.m[,2:3], data=coal.m[,4], fix.nugget=T, 
                  ini=c(.5,.5),
                  trend ="cte", lik.method='ML',cov.model="exponential")

#now we get the profile likelihood:

coal.prof <- proflik(coal.ml, coords=coal.m[,2:3],data=coal.m[,4],
                     sill.values=seq(0.1,5,length=5))

# to plot the 2-D profile

plot(coal.prof, yaxis.lims = c("as.computed"))


# PART II                                                                                       #
# Spatial prediction:  

coal.by1 <- krige.bayes(coords=coal.m[,2:3], data=coal.m[,4],
                        prior=prior.control(phi.discrete=seq(0, 3, l=21)))

# see the histograms of the posteriors for the mean, the partial sill and the range:
X11()
par(mfrow=c(1,3))
hist(coal.by1$posterior$sample$beta)
hist(coal.by1$posterior$sample$sigmasq)
hist(coal.by1$posterior$sample$phi)

### B. Bayesian prediction:

loci <- matrix(c(2,3.5,4,5.5), ncol=2, byrow=T)

coal.b2 <- krige.bayes(coords=coal.m[,2:3], data=coal.m[,4],locations=loci,
                       prior=prior.control(tausq.rel.prior="uniform",
                                           tausq.rel.discrete=seq(0,0.5,l=6),
                                           phi.discrete=seq(0,3,l=25)))

X11()
par(mfrow=c(1,4))
hist(coal.b2$posterior$sample$beta)
hist(coal.b2$posterior$sample$sigmasq)
hist(coal.b2$posterior$sample$phi)
hist(coal.b2$posterior$sample$tausq.rel)

# Moving neighbourhood  kriging

coal.k <- ksline(coords=coal.m[,2:3], data=as.vector(coal.m[,4]),
                 locations=loci, cov.pars=c(3,1), nugget=0,
                 cov.model="matern", kappa=.5, m0="ok")
coal.k$predict
coal.k$krige.var




