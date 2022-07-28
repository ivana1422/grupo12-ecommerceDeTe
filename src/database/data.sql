use tea;

insert into address (location) values 
('7184 Goodland Point'),('36695 Carey Parkway'),('285 Forest Run Avenue'),('990 Hermina Parkway'),('8 Commercial Court'),
('3862 Gulseth Plaza'),('7589 Holmberg Hill'),('15 Sloan Park'),('5 Oak Way'),('51659 Schurz Parkway'),('0777 Mallory Street'),
('20371 Redwing Trail'),('1799 Jana Point'),('62 Summit Avenue'),('03 Porter Park'),('8478 Graedel Road'),('41727 Haas Drive'),
('740 Norway Maple Hill'),('97866 Calypso Place'),('709 Parkside Point'),('47 Karstens Court'),('2570 Rockefeller Drive'),('7536 Saint Paul Avenue'),
('21281 Brickson Park Place'),('00859 Sachtjen Pass'),('30801 Sunnyside Trail'),('2 Dapin Circle'),('9 Forest Run Trail'),
('699 Corben Street'),('982 Paget Drive'),('4094 Hayes Road'),('2090 Summit Drive'),('2575 Iowa Circle'),('06464 Sherman Park'),('7338 Eliot Lane'),
('8 Hansons Circle'),('5 Saint Paul Avenue'),('7778 Crownhardt Center'),('72882 Sachs Hill'),('60168 Fairview Drive'),('14857 Nevada Drive'),
('234 Canary Road'),('9 Corry Pass'),('1329 Muir Point'),('77649 Di Loreto Park'),('80 Buena Vista Alley'),('38510 Manufacturers Junction'),
('6 Loeprich Court'),('7 Coolidge Court'),('843 Havey Lane');

insert into users (name, surname, email, pass, avatar, rol, address_id) values 
('Andonis', 'Gladden', 'agladden0@foxnews.com', 'DxBR5Fe8hi', 'https://robohash.org/veniamundeofficiis.png?size=50x50&set=set1', 1, 38),
('Niki', 'Volet', 'nvolet1@prnewswire.com', 'QXLPkshC', 'https://robohash.org/quiaatquenobis.png?size=50x50&set=set1', 1, 30),
('Sandi', 'Jaime', 'sjaime2@a8.net', 'hs2UlQ2pq', 'https://robohash.org/atoptioqui.png?size=50x50&set=set1', 0, 43),
('Devinne', 'Doggerell', 'ddoggerell3@dion.ne.jp', 'ObVkU5l', 'https://robohash.org/etveritatismagni.png?size=50x50&set=set1', 0, 42),
('Fionnula', 'Peggs', 'fpeggs4@kickstarter.com', '2kz00bvXBvB', 'https://robohash.org/molestiaedictanulla.png?size=50x50&set=set1', 0, 15),
('Van', 'Francecione', 'vfrancecione5@live.com', '2LcHzb', 'https://robohash.org/officiisuttenetur.png?size=50x50&set=set1', 0, 48),
('Maurine', 'Martinello', 'mmartinello6@squarespace.com', 'QEUaasQS', 'https://robohash.org/perferendisfugitnecessitatibus.png?size=50x50&set=set1', 0, 6),
('Karalynn', 'Sulland', 'ksulland7@reference.com', 'PKeL1f', 'https://robohash.org/modiveronihil.png?size=50x50&set=set1', 1, 18),
('Dominick', 'Wapple', 'dwapple8@tripod.com', 'vMrS6iI81rIU', 'https://robohash.org/facilisestmodi.png?size=50x50&set=set1', 1, 4),
('Elyse', 'Winchester', 'ewinchester9@cnbc.com', '8AyXP0', 'https://robohash.org/evenietoditpossimus.png?size=50x50&set=set1', 1, 7),
('Ly', 'Ranson', 'lransona@joomla.org', 'Y5RvafZT', 'https://robohash.org/quiaundesoluta.png?size=50x50&set=set1', 0, 7),
('Murray', 'Swendell', 'mswendellb@github.com', 'jnFB5m84y2d', 'https://robohash.org/sitlaboreinventore.png?size=50x50&set=set1', 0, 29),
('Andrea', 'Goodsall', 'agoodsallc@walmart.com', 'TYjLmtz', 'https://robohash.org/possimusmolestiaeexercitationem.png?size=50x50&set=set1', 0, 23),
('Suellen', 'Hedgeley', 'shedgeleyd@mac.com', 'wGibGH', 'https://robohash.org/mollitiamodimolestiae.png?size=50x50&set=set1', 1, 4),
('Yancy', 'Paty', 'ypatye@umich.edu', 'G1BGJiVDDrM', 'https://robohash.org/eligendiidnumquam.png?size=50x50&set=set1', 0, 36),
('Glenden', 'Francesch', 'gfranceschf@gizmodo.com', 'MZZh1LwT', 'https://robohash.org/commodiquiset.png?size=50x50&set=set1', 0, 44),
('Jakie', 'Rozea', 'jrozeag@deliciousdays.com', 'OXmUwZtK', 'https://robohash.org/repudiandaepariaturnisi.png?size=50x50&set=set1', 0, 8),
('Hersh', 'Quittonden', 'hquittondenh@e-recht24.de', 'DkpMski3Xpa4', 'https://robohash.org/placeatquisa.png?size=50x50&set=set1', 1, 3),
('Sheba', 'Le Page', 'slepagei@canalblog.com', 'EbBVzVduU3SK', 'https://robohash.org/aaliquidqui.png?size=50x50&set=set1', 1, 19),
('Niven', 'Polglase', 'npolglasej@yahoo.com', 'jHpDmJG', 'https://robohash.org/consequaturutprovident.png?size=50x50&set=set1', 1, 25),
('Yehudi', 'Flanne', 'yflannek@4shared.com', 'darCDFtnvpTk', 'https://robohash.org/autemdoloresrem.png?size=50x50&set=set1', 0, 48),
('Eugene', 'Hanford', 'ehanfordl@comsenz.com', '9ejbfBg', 'https://robohash.org/iustomaioresincidunt.png?size=50x50&set=set1', 0, 41),
('Wilek', 'Orwin', 'worwinm@liveinternet.ru', 'u2908c3', 'https://robohash.org/adipiscicupiditateoccaecati.png?size=50x50&set=set1', 1, 28),
('Glennis', 'Sleet', 'gsleetn@tumblr.com', 'XNk84hD9B', 'https://robohash.org/eteumreprehenderit.png?size=50x50&set=set1', 0, 40),
('Beaufort', 'Gauche', 'bgaucheo@gizmodo.com', 'j8F3Te2qtzqG', 'https://robohash.org/nullarepellendusiure.png?size=50x50&set=set1', 1, 11);

insert into products(name, price, description,coment,weight,offer,stock,discount) values 
('T� negro en hebras cortas',350,'T� negro en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores para disfrutar de un rico te por la tarde!','Lata 65g',1,10,10),
('T� verde en hebras cortas',350,'T� verde en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores para disfrutar de un rico te por la tarde, de sabor dulce y delicado!','Lata 65g',1,10,10),
('T� rojo en hebras cortas',350,'T� rojo en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores, Dulce y entrador!','Lata 65g',1,5,10),
('Tetera Artesanal de Cer�mica',1980,'Teteras de cer�mica hechas a mano, Capacidad 1 litro. Combinable con set de cuencos','Hermosa tetera para disfrutar de un rico te en hebras', null, 1,3,5),
('Cucharita de la Aldea',80,'Cucharita hecha en bamb� o cedro, ideal para servir hebras o az�car','Cucharita de calidad!',null,0,30,0),
('Infusor artesanal con cord�n',720,'Infusor hecho a mano con fibras naturales.','Infusor estetico y de buena calidad! Sirve para todo tipo de tazas',null,0,10,0),
('Mielera de la Aldea',90,'Mielera en madera ideal para acompa�ar tus momentos de conexi�n con las hebras misioneras.','Excelente producto para disfrutar a�n mas de nuestros tes',null,0,5,0),
('Cuenco de cer�mica',820,'Cuenco de cer�mica hecho a mano. Con inscripci�n Iguaz�. Combinable con teteras.','Cuenco artesanal para las buenas energias',null,0,3,0);

insert into ingredients (name,product_id)values
('Canela',1),('Arandanos',1),('Clavo de olor',1),('Ralladura de naranja',1),
('Durazno',2),('P�talos de rosas amarillas',2),('Cardamomo',2),('Aroma frutal',2),
('Hebras de Yunnan', 3),('Cacao',3),('Coco',3),('Trocitos de Toffee',3),('Vainilla',3);

insert into images(src, product_id) values
('te-negro.jpg',1),('te-negro2.jpg',1),('te-negro3.jpg',1),
('te-verde.jpg',2),('te-verde2.jpg',2),('te-verde3.jpg',2),
('te-rojo.jpg',3),('te-rojo2.jpg',3),('te-rojo3.jpg',3),
('tetera.jpg',4),('tetera2.jpg',4),('tetera3.jpg',4),
('cucharita-aldea.jpg',5),('cucharita-aldea2.jpg',5),
('infusor.jpg',6),('infusor2.jpg',6),
('mielera.jpg',7),('mielera2.jpg',7),
('cuenca.jpg',8),('cuenca2.jpg',8);

insert into categories (name) values
('T� Puro'),('T� Aromatizado'),('Infusi�n Herbal'),('Accesorios');

insert into product_category (product_id,category_id) values
(1,1),(1,2),(1,3),
(2,1),(2,3),
(3,1),(3,2),(3,3),
(4,2),(4,3),
(5,4),
(6,4),
(7,4),
(8,4);

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854338/nwf4iwlhjtcdqc6p1hln.png', product_id=1, public_id=NULL
WHERE id=1;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854343/e8pb31b5vs7ly3avajf1.png', product_id=1, public_id=NULL
WHERE id=2;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854350/vb7wdja5ejq4ucbvmf8z.png', product_id=1, public_id=NULL
WHERE id=3;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854452/ggskmhrmiwdysrlvtckc.png', product_id=2, public_id=NULL
WHERE id=4;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854457/ewvuzau3of5ajwah22kc.png', product_id=2, public_id=NULL
WHERE id=5;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854463/kxknwlvo0ztmlznrzl1s.png', product_id=2, public_id=NULL
WHERE id=6;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854516/linnlpftdjaoqlsmb22x.png', product_id=3, public_id=NULL
WHERE id=7;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854521/od4bfzfny3hztp3hwl2j.png', product_id=3, public_id=NULL
WHERE id=8;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854528/yomouv6vpwq36jtmwim3.png', product_id=3, public_id=NULL
WHERE id=9;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884319/vkw5rnxnfqwtt0t18fgw.jpg', product_id=4, public_id=NULL
WHERE id=10;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884322/cqshchhoudwxg9dxf9la.jpg', product_id=4, public_id=NULL
WHERE id=11;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884325/m9f2avernjyev7fro5si.jpg', product_id=4, public_id=NULL
WHERE id=12;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884607/ek95dr2wvxcr37u2vc4n.png', product_id=5, public_id=NULL
WHERE id=13;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884612/b6jlfandim5cwmnliez0.png', product_id=5, public_id=NULL
WHERE id=14;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884771/mqfs9fvj8z6untprjx0n.jpg', product_id=6, public_id=NULL
WHERE id=15;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884773/ttoe6qmvem9cvahwygyn.jpg', product_id=6, public_id=NULL
WHERE id=16;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884806/i653em1s0sbegzjzh8pr.png', product_id=7, public_id=NULL
WHERE id=17;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884811/ljfl5fghyisnvknb4fzv.png', product_id=7, public_id=NULL
WHERE id=18;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884893/gmtepduiz0jml5ujoebb.jpg', product_id=8, public_id=NULL
WHERE id=19;

UPDATE tea.images
SET src='https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884895/ewydsm4qhqonlobr4hxx.jpg', product_id=8, public_id=NULL
WHERE id=68;

/*Insertar nuevos productos*/
INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(164, 'Coffee Pack', 950, 'Degustación de cafés Consultar stock!
', 'Pack regalo de 2 mini frascos de café instantáneos gourmet. Caramel Machiato, con vainilla y caramel', '70g', 0, 5, NULL, 3);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(163, 'Varieté', 1400, 'Presentación ideal para regalo con 5 tubitos de diferentes blends de nuestros tés en hebras. Incluím', 'Caja degustación de té
', NULL, 0, 10, 20, 4);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(165, 'Alma Flamenca', 500, 'Yerba orgánica tipo barbacuá, canchada gruesa, secada a la leña, con suave aroma ahumado, con cascar', 'Con naranja y pomelo', NULL, 0, 5, NULL, 2);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(166, 'Infusor de té de metal bolita', 600, 'Infusor de té de metal para taza o tetera.', 'infusor para disfrutar nuestros exquisitos tés', NULL, 0, 3, 25, 4);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(167, 'Tea for one', 1500, 'taza + tetera para uno', 'tetera de cerámica, pintada a mano, varios modelos', NULL, 0, 10, 10, 4);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(168, 'Morning Boost', 550, 'Té rojo orgánico en hebras, almendras en trozos, jengibre rallado, gingseng, semillas de hinojo y ca', 'Para despertarte!
Es un producto natural, NO un remedio.', NULL, 0, 15, 10, 1);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(169, 'Miracle Organic Matcha', 3200, 'El milagroso Té Verde molido japonés, de calidad ceremonial, un elixir de sabor para regenerarte cad', 'No contiene azúcares ni alérgenos. No recomendado para niños y embarazadas', NULL, 0, 23, 5, 2);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(170, 'Infusión Magic Alkaline', 1200, 'Infusión aromáticamente balsámica y dulce con virtudes alcalinizantes que aportan un equilibrio del ', 'Sorprenderá el contraste armonioso del balsámico de la melisa, el romero y la lavanda con un toque p', NULL, 0, 10, 25, 3);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(171, 'Infusión Cocoa Orange', 800, 'Fragante y antioxidante infusión con todo el sabor del cacao y el picante del jengibre.
', 'Una infusión sin teína, ideal con leche o bebida vegetal  para un desayuno o merienda cremosa y natu', NULL, 0, 5, 5, 3);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(172, 'Té rojo praliné', 900, 'Auténtico praliné con Pu Erh, algarroba, manzana, avellana, canela, achicoria y flores.
', 'Delicioso Té Rojo Pu Erh, similar a la famosa especialidad "praliné" originaria de la ciudad frances', NULL, 0, 15, NULL, 1);

INSERT INTO tea.products
(id, name, price, description, coment, weight, offer, stock, discount, category_id)
VALUES(173, 'Té negro Pakistaní', 700, 'Té Negro con especias de Oriente donde los intensos sabores animan a comenzar el día con energía. 
', 'Relaja los músculos, mantiene despierto el cuerpo y la mente. Posee un efecto diurético y antioxidan', NULL, 0, 14, 5, 1);


INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(251, 'canchada gruesa', 165);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(252, 'Yerba orgánica tipo barbacuá', 165);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(253, 'cascaritas de naranja y pomelo', 165);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(260, 'Manzana', 168);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(261, 'Romero', 168);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(262, 'Pétalos y botones de rosa', 168);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(263, 'Flores de lavanda', 169);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(264, 'Flores de manzanilla', 169);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(265, 'Raíz de diente de león', 169);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(266, 'Melisa', 170);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(267, 'Pera', 170);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(268, 'Jengibre', 170);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(269, 'Cáscara de cacao orgánico', 171);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(270, 'Jengibre', 171);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(271, 'Naranja', 171);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(272, 'Algarroba', 172);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(273, 'Manzana', 172);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(274, 'Canela', 172);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(275, 'Canela', 173);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(276, 'Cardamomo', 173);
INSERT INTO tea.ingredients
(id, name, product_id)
VALUES(277, 'Clavo', 173);


INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(108, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879628/jmezivatnbsgt2zmhfeq.png', 163, 'jmezivatnbsgt2zmhfeq');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(109, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879725/qtyhjcvat2a2ahgfyt4i.png', 164, 'qtyhjcvat2a2ahgfyt4i');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(110, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879995/qfs32un5sowbi8azmhdi.png', 165, 'qfs32un5sowbi8azmhdi');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(111, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883608/rmtswyokmbz0yzebxrhc.png', 166, 'rmtswyokmbz0yzebxrhc');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(112, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883846/iaqs0uouaqjjnasskuet.png', 167, 'iaqs0uouaqjjnasskuet');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(113, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883849/hnvpihrc5qlu8xrf0cvz.png', 167, 'hnvpihrc5qlu8xrf0cvz');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(114, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884116/of3lkudzlyncolo9pla3.png', 168, 'of3lkudzlyncolo9pla3');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(115, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884622/nlrrcexue1kj8mzkm282.jpg', 169, 'nlrrcexue1kj8mzkm282');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(116, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884626/n6en4utqy9oorqokgtm9.jpg', 169, 'n6en4utqy9oorqokgtm9');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(117, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884627/i7yhdobokag33y2cudwz.jpg', 169, 'i7yhdobokag33y2cudwz');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(118, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885340/jdqsixyityskrpp9flud.jpg', 170, 'jdqsixyityskrpp9flud');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(119, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885342/hkuuqn8r5qztepzvqvwu.jpg', 170, 'hkuuqn8r5qztepzvqvwu');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(120, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885344/ogtuajxoaapmks3bkjx2.jpg', 170, 'ogtuajxoaapmks3bkjx2');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(121, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885642/dlykpfzxoy2rkhrki3wa.jpg', 171, 'dlykpfzxoy2rkhrki3wa');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(122, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885644/owhzi8idnz1t3q4ohzzf.jpg', 171, 'owhzi8idnz1t3q4ohzzf');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(123, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885917/k5f4vp2xr75jk9o9jdly.jpg', 172, 'k5f4vp2xr75jk9o9jdly');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(124, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885919/lln3tjqwkwo2e1tdjuxy.jpg', 172, 'lln3tjqwkwo2e1tdjuxy');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(125, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885920/hanlkxvqqe7pvnvwxqim.jpg', 172, 'hanlkxvqqe7pvnvwxqim');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(126, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886214/ai4z4ngbdyvc4tf19cfz.jpg', 173, 'ai4z4ngbdyvc4tf19cfz');
INSERT INTO tea.images
(id, src, product_id, public_id)
VALUES(127, 'https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886215/oqvbie7dc6uwhspezet6.jpg', 173, 'oqvbie7dc6uwhspezet6');
