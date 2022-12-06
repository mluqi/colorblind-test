/* eslint-disable no-plusplus */
import {
    arrayTest,
} from './tes';

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
                    ${arrayTest.map((test, index) => `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${test.id}</td>
                        <td>${test.result}/12</td>
                        <td><button type="button" class="btn btn-danger" id="btn-delete" value="${index}"><i class="bi bi-trash3"></i></button></td>
                    </tr>
                    `).join('')}
                <!-- end output data tes disini-->

                </tbody>
            </table>
        </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const btnDelete = document.getElementsByClassName('btn-danger');
        for (let i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener('click', () => {
                // eslint-disable-next-line no-undef
                swal({
                        title: 'Hapus item ini?',
                        icon: 'warning',
                        buttons: ['Batal', true],
                        dangerMode: true,
                    })
                    .then((willDelete) => {
                        if (willDelete) {
                            arrayTest.splice(btnDelete[i].value, 1);
                            localStorage.setItem('COLOR-BLIND-TEST', JSON.stringify(arrayTest));
                            // eslint-disable-next-line no-undef
                            swal({
                                title: 'Sukses!',
                                text: 'Riwayat berhasil dihapus',
                                icon: 'success',
                                button: true,
                            }).then(() => {
                                document.location.reload();
                            });
                        }
                    });
            });
        }
    },
};

export default Riwayat;