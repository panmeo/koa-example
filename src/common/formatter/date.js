const moment = require('moment');

/**
 * 오늘 날짜면 N분전, N시간전
 * 오늘 이전이면 YYYY-MM-DD 형식으로 표기
 * @param {string} date  'YYYY-MM-DD NN:mm:ss 형식의 문자'
 */
exports.dateFromNow = date =>{
    let now = moment.format('MMMM DO YYYY, h:mm:ss');
    console.log(`${now}`);
}
/**
 * 새 10분을 기바으로 새글인지 판단
 * @param {*} date 
 * @returns 
 */
exports.inNewFeed = date => {
    let currentTime = moment().add(-10,'minute');
    let feedDate = moment(date);

    console.log(feedDate);
    console.log(currentTime);
    // return feedDate.isAfter(currentTime);
    return false;
}