export const FormatAmount= (amount: number) => {
  const value = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);

  return value;
}

export const FormatDate = (date: string) => {
  const value = new Intl.DateTimeFormat('pt-br').format(
    new Date(date)
  );

  return value;
}