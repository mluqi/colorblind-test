const Tes = {
    async render() {
        return `
        <div class="test-container container mb-5 pt-5" style="min-height: 100vh;">
            <h4 class="text-center">Test</h4>
            <hr class="border border-secondary opacity-90">
        </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Tes;