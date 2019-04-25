#to run: Rscript testingWith.R

pass = read.csv("../../../mysqlPass.csv")
password = sapply(pass["password"], as.character)
library(odbc)
con <- dbConnect(odbc(),
                 Driver = "SQLServer",
                 Server = "localhost",
                 Database = "nodemysql",
                 UID = "root",
                 PWD = rstudioapi::askForPassword("Database password")
                 Port = 1433)