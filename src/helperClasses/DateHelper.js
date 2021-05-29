import moment from "moment";

export function reformatDate(date){
    return moment(new Date(date)).format("DD MMMM yyyy - HH:mm");
}
export function myMoment(date){
    moment.locale("fr-ca");
    let mom = new moment(date);
    return mom.fromNow();
}
