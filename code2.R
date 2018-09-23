library(spatstat)
temp = read.csv("DC_Crime_2016.csv", sep=",")
temp1 <- as.matrix(temp)
W <-owin(c(min(temp1[,2]),max(temp1[,2])),c(min(temp1[,3]),max(temp1[,3])))
#W <-owin(c(min(temp1[,2]+1),max(temp1[,2]-0.5)),c(min(temp1[,3]+1.5),max(temp1[,3]-0.5)))
P<- ppp(temp1[,2],temp1[,3],window = W)
Q<- quadratcount(P,nx=10,ny=10)
#plot(P, pch=1, cols="grey70", main=NULL)
#plot(Q, add=TRUE)

Q.d <- intensity(Q)
# Plot the density
plot( intensity(Q, image=TRUE), main=NULL)
plot(P, pch=1, cex=0.6, col=rgb(0,0,0,.2), add=TRUE)

