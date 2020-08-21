export default function convertHourToMinutes(time:string){
    //8:00
    
    const [hour, minutes] = time.split(':').map(Number); //pega 8 e 00 e transforma em numérico
    const timeInMinutes = (hour*60) + minutes;

    return timeInMinutes;
}