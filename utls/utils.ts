export function formatData(isoString: string) : string {
    const data = new Date(isoString)
    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return formatter.format(data)
}

export function formatDataWithHour(isoString: string) : string {
    const data = new Date(isoString)
    const HourData = data.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    return HourData
}