const Riwayat = {
    async render() {
        return `
        <div class="history-container container mb-5 pt-5" style="min-height: 100vh;">
            <h4 class="text-center">Riwayat Test</h4>
            <hr class="border border-secondary opacity-90">
            <table class="table table-secondary table-striped table-hover mt-5">
                <thead>
                    <tr class="text-center mt-5">
                        <th scope="col">No</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Skor</th>
                        <th scope="col" class="text-center"><i class="bi bi-pencil-square"></i></th>
                    </tr>
                </thead>
                <tbody class="align-middle text-center">

                <!--output data tes disini-->
                    <tr>
                        <th scope="row">1</th>
                        <td>22 November 2022</td>
                        <td>100</td>
                        <td><button type="button" class="btn btn-danger" id="btn-delete" value=""><i class="bi bi-trash3"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>23 November 2022</td>
                        <td>100</td>
                        <td><button type="button" class="btn btn-danger" id="btn-delete" value=""><i class="bi bi-trash3"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>24 November 2022</td>
                        <td>100</td>
                        <td><button type="button" class="btn btn-danger" id="btn-delete" value=""><i class="bi bi-trash3"></i></button></td>
                    </tr>
                <!-- end output data tes disini-->

                </tbody>
            </table>
        </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Riwayat;