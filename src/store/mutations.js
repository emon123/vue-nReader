export default {
    setRankId(state,rankDetail){
        state.weekRankId = rankDetail._id;
        state.monthRankId = rankDetail.monthRank;
        state.totalRankId = rankDetail.totalRank;
        state.headText = rankDetail.shortTitle;
    },
    setPrePath(state,prePath){
        state.prePath = prePath;
    },
    setHeadText(state,text){
      state.headText = text;
    }
}
