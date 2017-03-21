var props = [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." },
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." },
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." },
        { title: "Aplicativo", text: "Acesse as notícias e matérias, diversas vezes por dia, na tela do seu smartphone." }
    ];

var products = [{
    title: "Veja",
    subtitle: "Assinatura multiplataforma",
    type: "multi",
    img: "img/impressa_digital.png",
    vigencia: "2",
    promo: "28%",
    destaque: false,
    brinde: false,
    color: "color2",
    desc: "52 revistas anuais|1 ano de acesso digital|1 ano de aplicativo",
    desc: [
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura impressa",
    type: "impresso",
    img: "img/impressa.png",
    vigencia: "1",
    promo: "6meses",
    destaque: true,
    brinde: true,
    color: "color1",
    desc: [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura digital",
    type: "digital",
    img: "img/digital.png",
    vigencia: "1",
    promo: "",
    destaque: false,
    brinde: false,
    color: "color3",
    desc: [
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." }
    ],
    entrega: false
}, {
    title: "Veja",
    subtitle: "Assinatura impresso 1",
    type: "impresso",
    img: "img/impressa.png",
    vigencia: "1",
    promo: "6meses",
    destaque: false,
    brinde: true,
    color: "color1",
    desc: [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura digital 1",
    type: "digital",
    img: "img/digital.png",
    vigencia: "2",
    promo: "",
    destaque: false,
    brinde: false,
    color: "color3",
    desc: [
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." }
    ],
    entrega: false
}, {
    title: "Veja",
    subtitle: "Assinatura multi 1",
    type: "multi",
    img: "img/impressa_digital.png",
    vigencia: "2",
    promo: "",
    destaque: false,
    brinde: true,
    color: "color2",
    desc: [
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura impresso 2",
    type: "impresso",
    img: "img/impressa.png",
    vigencia: "2",
    promo: "28%",
    destaque: false,
    brinde: false,
    color: "color1",
    desc: [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura digital 2",
    type: "digital",
    img: "img/digital.png",
    vigencia: "1",
    promo: "",
    destaque: false,
    brinde: true,
    color: "color3",
    desc: [
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." }
    ],
    entrega: false
}, {
    title: "Veja",
    subtitle: "Assinatura multi 2",
    type: "multi",
    img: "img/impressa_digital.png",
    vigencia: "1",
    promo: "28%",
    destaque: false,
    brinde: false,
    color: "color2",
    desc: [
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." }
    ],
    entrega: true
}];


var carouselInner = $(".carousel-inner");
var activeProducts = [];

activeProducts = products;

function filter(value) {
    if (value == "destaque") {
        activeProducts = products;
    } else {
        activeProducts = products.filter(function(ítem) {
            return ítem.type === value;
        });
    }
    initCarousel();
}



$("#destaque").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("destaque");
});

$("#impresso").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("impresso");
});

$("#multi").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("multi");
});

$("#digital").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("digital");
});


function initCarousel() {
    carouselInner.empty();

    $.each(activeProducts, function(p, product) {
        var prod = $("<div>").addClass('item');

        if (p == 0) {
            prod.addClass('active');
        }


        var container = $("<div>").addClass('col-xs-4 item-container');
        prod.append(container);

        var itemBorder = $("<div>").addClass('item-border');
        container.append(itemBorder);

        //
        //
        var header = $("<div>").addClass('item-header');
        /*
                if (product.destaque) {
                    header.addClass(product.color);
                } else {
                    header.addClass(product.color + "-back");
                }
        */
        itemBorder.addClass(product.color + "-back");

        header.append($("<span>").addClass('title').text(product.title));
        header.append($("<span>").addClass('sub').text(product.subtitle));
        header.append($("<img>").addClass('img-responsive img').attr('src', product.img));
        itemBorder.append(header)
            //
        var body = $("<div>").addClass('item-body');

        if (product.vigencia == 1) {
            body.append($("<img>").attr('src', "img/assine-1-ano.png").addClass('img-padding'));
        } else {
            body.append($("<img>").attr('src', "img/assine-2-anos.png").addClass('img-padding'));
        }

        if (product.promo == "6meses") {
            body.append($("<img>").attr('src', "img/6-meses.png").addClass('img-padding'));
        } else if (product.promo == "28%") {
            body.append($("<img>").attr('src', "img/28-desconto.png").addClass('img-padding'));
        }
        //
        body.append($("<img>").attr('src', "img/10x.png").addClass('img-padding'));

        body.append($("<button>").attr('type', "button").addClass('btn btn-warning btn-block btn-add').addClass(product.color).append($("<i>").addClass('fa fa-cart-plus fa-2x')).append($("<span>").addClass('btn-text').text('Adicionar ao Carrinho')));

        itemBorder.append(body);
        //
        if (product.brinde || product.entrega || product.desc) {

            var footer = $("<div>").addClass('item-footer');


            var listDesc = $("<ul>");

            $.each(product.desc, function(d, desc) {
                var itemDesc = $("<li>").text(desc.title + ": " + desc.text);
                listDesc.append(itemDesc);
            });
            footer.append(listDesc);
        }

        if (product.brinde) {
            footer.append($("<hr>"));
            footer.append($("<img>").attr('src', "img/brinde.png").addClass('img-padding'));
        }

        if (product.entrega) {
            footer.append($("<hr>"));
            footer.append($("<img>").attr('src', "img/preco-sao-paulo.png").addClass('img-padding'));
            footer.append($("<img>").attr('src', "img/CEP.png").addClass('img-padding'));
        }
        itemBorder.append(footer);

        //
        carouselInner.append(prod);
    });

    configCarousel();
}
initCarousel();

function configCarousel() {

    $('.multi-item-carousel').carousel({
        interval: false
    });

    $('.multi-item-carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $('#test1').click(function() {
        console.log("test1");
        $('#theCarousel').carousel(4);
    });
}
