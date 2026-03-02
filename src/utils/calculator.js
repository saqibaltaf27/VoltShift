// Voltage Drop Calculator
export const voltageDrip = (source, terminal) => {
    if(!source || !terminal) return 0;

    const loss = ((source - terminal) / source)*100;

    return parseFloat(loss.toFixed(2));
};

