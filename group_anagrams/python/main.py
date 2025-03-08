def groupAnagrams(strs):
    final = {}
    for s in strs:
        listS = list(s)
        listS.sort()
        sortedS = "".join(listS)
        if sortedS not in final:
            final[sortedS]=[]
        final[sortedS].append(s)
    return list(final.values())



strs = ["act","pots","tops","cat","stop","hat"]

res = groupAnagrams(strs)
print(res)
