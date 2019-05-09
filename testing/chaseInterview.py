def chaseSum(ilist, num):
    for i,iindex in enumerate(ilist):
        for j,jindex in enumerate(ilist):
            print(f"{i},{j}, index {iindex},{jindex}")
            if i+j == num:
                
                return(iindex-1,jindex-1)

def chaseSum(ilist, num):
    jlist = ilist*len(ilist)
    ilist2 = []
    for i in ilist:
        ilist2+= [i]*len(ilist)
    print

def chaseNew(ilist, num):
    for iindex,i in enumerate(ilist):
        for jindex,j in enumerate(ilist[iindex:]):
            print(f"{i},{j}, index {iindex},{jindex}")
            if i+j == num:
                
                return(iindex,jindex+iindex)

if __name__ == "__main__":
    print(chaseNew([1,2,3,4,5], 8))