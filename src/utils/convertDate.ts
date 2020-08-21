import moment from 'moment'

export const convertToYears = (date:string) => {
    if(date != ''){
        return moment(new Date()).diff(moment(date), 'years')
    }

    return ''
}

export const convertToMonths = (date:string) => {
    if(date != ''){
        return moment(new Date()).diff(moment(date), 'month')
    }

    return ''
}