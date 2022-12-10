import {
    arrayTest,
} from './tes';

const Riwayat = {
    async render() {
        return `
        <div class="history-container container pb-5 pt-5" style="min-height: 100vh;">
            <h4 class="text-center">Riwayat Tes</h4>
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
                    ${arrayTest.map((test, index) => `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${test.id}</td>
                        <td>${test.result}/25</td>
                        <td><button type="button" class="btn btn-danger" id="btn-delete" value="${index}"><i class="bi bi-trash3"></i></button></td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    },

    async afterRender() {
        const btnDelete = document.getElementsByClassName('btn-danger');
        for (let i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener('click', () => {
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