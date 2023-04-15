import './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});
$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle2" id="dropdownMenuButton2">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton2">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action#2</a>
                <a href="#" class="dropdown-item">Action#3</a>
            </div>
         </div>
    `
);

$('.dropdown-toggle2').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title render',
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nam rem adipisci eligendi nulla sint ullam molestiae ut aliquam sequi quas illo maxime est, pariatur, quibusdam omnis. Dolor, laborum natus?'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены')
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('hello world')
                }
            ]
        ]
    }
}))