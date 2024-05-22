document.getElementById('type').addEventListener('change', function() {
    if (this.value === 'arithmetic') {
        document.getElementById('difference-group').style.display = 'block';
        document.getElementById('ratio-group').style.display = 'none';
    } else {
        document.getElementById('difference-group').style.display = 'none';
        document.getElementById('ratio-group').style.display = 'block';
    }
});

function calculate() {
    const type = document.getElementById('type').value;
    const a1 = parseFloat(document.getElementById('a1').value);
    const n = parseInt(document.getElementById('n').value);

    if (type === 'arithmetic') {
        const d = parseFloat(document.getElementById('difference').value);
        const an = a1 + (n - 1) * d;
        document.getElementById('result').textContent = `Suku ke-${n} dari deret aritmetika adalah ${an}`;
    } else if (type === 'geometric') {
        const r = parseFloat(document.getElementById('ratio').value);
        const an = a1 * Math.pow(r, n - 1);
        document.getElementById('result').textContent = `Suku ke-${n} dari deret geometri adalah ${an}`;
    } else {
        document.getElementById('result').textContent = 'Silakan pilih tipe deret dan masukkan nilai yang valid.';
    }
}
