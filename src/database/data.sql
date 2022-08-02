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

/*PRODUCTOS*/
insert into categories (name) values
('Té Puro'),('Té Aromatizado'),('Infusión Herbal'),('Accesorios');

insert into products(name, price, description,coment,weight,offer,stock,discount,category_id) values 
('Té negro en hebras cortas',350,'Té negro en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores para disfrutar de un rico te por la tarde!','Lata 65g',1,10,10,1),
('Té verde en hebras cortas',350,'Té verde en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores para disfrutar de un rico te por la tarde, de sabor dulce y delicado!','Lata 65g',1,10,10,2),
('Té rojo en hebras cortas',350,'Té rojo en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores, Dulce y entrador!','Lata 65g',1,5,10,2),
('Tetera Artesanal de Cerámica',1980,'Teteras de cerámica hechas a mano, Capacidad 1 litro. Combinable con set de cuencos','Hermosa tetera para disfrutar de un rico te en hebras', null, 1,3,5,4),
('Cucharita de la Aldea',80,'Cucharita hecha en bambú o cedro, ideal para servir hebras o azúcar','Cucharita de calidad!',null,0,30,0,4),
('Infusor artesanal con cordón',720,'Infusor hecho a mano con fibras naturales.','Infusor estetico y de buena calidad! Sirve para todo tipo de tazas',null,0,10,0,4),
('Mielera de la Aldea',90,'Mielera en madera ideal para acompañar tus momentos de conexión con las hebras misioneras.','Excelente producto para disfrutar aún mas de nuestros tes',null,0,5,0,4),
('Cuenco de cerámica',820,'Cuenco de cerámica hecho a mano. Con inscripción Iguazú. Combinable con teteras.','Cuenco artesanal para las buenas energias',null,0,3,0,4),
('Coffee Pack', 950, 'Degustación de cafés Consultar stock!', 'Pack regalo de 2 mini frascos de café instantáneos gourmet. Caramel Machiato, con vainilla y caramel', '70g', 0, 5, NULL, 3), /*Producto 9*/
('Varieté', 1400, 'Presentación ideal para regalo con 5 tubitos de diferentes blends de nuestros tés en hebras. Incluím', 'Caja degustación de té', NULL, 0, 10, 20, 4),
('Alma Flamenca', 500, 'Yerba orgánica tipo barbacuá, canchada gruesa, secada a la leña, con suave aroma ahumado, con cascar', 'Con naranja y pomelo', NULL, 0, 5, NULL, 2),
('Infusor de té de metal bolita', 600, 'Infusor de té de metal para taza o tetera.', 'infusor para disfrutar nuestros exquisitos tés', NULL, 0, 3, 25, 4),
('Tea for one', 1500, 'taza + tetera para uno', 'tetera de cerámica, pintada a mano, varios modelos', NULL, 0, 10, 10, 4),
('Morning Boost', 550, 'Té rojo orgánico en hebras, almendras en trozos, jengibre rallado, gingseng, semillas de hinojo y ca', 'Para despertarte! Es un producto natural, NO un remedio.', NULL, 0, 15, 10, 1),
('Miracle Organic Matcha', 3200, 'El milagroso Té Verde molido japonés, de calidad ceremonial, un elixir de sabor para regenerarte cad', 'No contiene azúcares ni alérgenos. No recomendado para niños y embarazadas', NULL, 0, 23, 5, 2),
('Infusión Magic Alkaline', 1200, 'Infusión aromáticamente balsámica y dulce con virtudes alcalinizantes que aportan un equilibrio del ', 'Sorprenderá el contraste armonioso del balsámico de la melisa, el romero y la lavanda con un toque p', NULL, 0, 10, 25, 3),
('Infusión Cocoa Orange', 800, 'Fragante y antioxidante infusión con todo el sabor del cacao y el picante del jengibre.', 'Una infusión sin teína, ideal con leche o bebida vegetal  para un desayuno o merienda cremosa y natu', NULL, 0, 5, 5, 3),
('Té rojo praliné', 900, 'Auténtico praliné con Pu Erh, algarroba, manzana, avellana, canela, achicoria y flores.', 'Delicioso Té Rojo Pu Erh, similar a la famosa especialidad "praliné" originaria de la ciudad frances', NULL, 0, 15, NULL, 1),
('Té negro Pakistaní', 700, 'Té Negro con especias de Oriente donde los intensos sabores animan a comenzar el día con energía.', 'Relaja los músculos, mantiene despierto el cuerpo y la mente. Posee un efecto diurético y antioxidan', NULL, 0, 14, 5, 1);

insert into ingredients (name,product_id)values
('Canela',1),('Arandanos',1),('Clavo de olor',1),('Ralladura de naranja',1),
('Durazno',2),('Pétalos de rosas amarillas',2),('Cardamomo',2),('Aroma frutal',2),
('Hebras de Yunnan', 3),('Cacao',3),('Coco',3),('Trocitos de Toffee',3),('Vainilla',3),
('canchada gruesa', 9),('Yerba orgánica tipo barbacuá', 9),('cascaritas de naranja y pomelo', 9),
('Manzana', 12),('Romero', 12),('Pétalos y botones de rosa', 12),
('Flores de lavanda', 13),('Flores de manzanilla', 13),('Raíz de diente de león', 13),
('Melisa', 14), ('Pera', 14),('Jengibre', 14),
('Cáscara de cacao orgánico', 15), ('Jengibre', 15),('Naranja', 15),
('Algarroba', 16),('Manzana', 16),('Canela', 16),
('Canela', 17),('Cardamomo', 17),('Clavo', 17);

insert into images(src, product_id, public_id) values
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854338/nwf4iwlhjtcdqc6p1hln.png',1,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854343/e8pb31b5vs7ly3avajf1.png',1,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854350/vb7wdja5ejq4ucbvmf8z.png',1,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854452/ggskmhrmiwdysrlvtckc.png',2,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854457/ewvuzau3of5ajwah22kc.png',2,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854463/kxknwlvo0ztmlznrzl1s.png',2,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854516/linnlpftdjaoqlsmb22x.png',3,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854521/od4bfzfny3hztp3hwl2j.png',3,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657854528/yomouv6vpwq36jtmwim3.png',3,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884319/vkw5rnxnfqwtt0t18fgw.jpg',4,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884322/cqshchhoudwxg9dxf9la.jpg',4,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884325/m9f2avernjyev7fro5si.jpg',4,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884607/ek95dr2wvxcr37u2vc4n.png',5,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884612/b6jlfandim5cwmnliez0.png',5,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884771/mqfs9fvj8z6untprjx0n.jpg',6,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884773/ttoe6qmvem9cvahwygyn.jpg',6,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884806/i653em1s0sbegzjzh8pr.png',7,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884811/ljfl5fghyisnvknb4fzv.png',7,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884893/gmtepduiz0jml5ujoebb.jpg',8,NULL),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884895/ewydsm4qhqonlobr4hxx.jpg',8,null),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879628/jmezivatnbsgt2zmhfeq.png', 9, 'jmezivatnbsgt2zmhfeq'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879725/qtyhjcvat2a2ahgfyt4i.png', 10, 'qtyhjcvat2a2ahgfyt4i'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879995/qfs32un5sowbi8azmhdi.png', 11, 'qfs32un5sowbi8azmhdi'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883608/rmtswyokmbz0yzebxrhc.png', 12, 'rmtswyokmbz0yzebxrhc'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883846/iaqs0uouaqjjnasskuet.png', 13, 'iaqs0uouaqjjnasskuet'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883849/hnvpihrc5qlu8xrf0cvz.png', 13, 'hnvpihrc5qlu8xrf0cvz'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884116/of3lkudzlyncolo9pla3.png', 14, 'of3lkudzlyncolo9pla3'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884622/nlrrcexue1kj8mzkm282.jpg', 15, 'nlrrcexue1kj8mzkm282'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884626/n6en4utqy9oorqokgtm9.jpg', 15, 'n6en4utqy9oorqokgtm9'),
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884627/i7yhdobokag33y2cudwz.jpg', 15, 'i7yhdobokag33y2cudwz'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885340/jdqsixyityskrpp9flud.jpg', 16, 'jdqsixyityskrpp9flud'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885342/hkuuqn8r5qztepzvqvwu.jpg', 16, 'hkuuqn8r5qztepzvqvwu'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885344/ogtuajxoaapmks3bkjx2.jpg', 16, 'ogtuajxoaapmks3bkjx2'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885642/dlykpfzxoy2rkhrki3wa.jpg', 17, 'dlykpfzxoy2rkhrki3wa'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885644/owhzi8idnz1t3q4ohzzf.jpg', 17, 'owhzi8idnz1t3q4ohzzf'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885917/k5f4vp2xr75jk9o9jdly.jpg', 18, 'k5f4vp2xr75jk9o9jdly'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885919/lln3tjqwkwo2e1tdjuxy.jpg', 18, 'lln3tjqwkwo2e1tdjuxy'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885920/hanlkxvqqe7pvnvwxqim.jpg', 18, 'hanlkxvqqe7pvnvwxqim'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886214/ai4z4ngbdyvc4tf19cfz.jpg', 19, 'ai4z4ngbdyvc4tf19cfz'), 
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886215/oqvbie7dc6uwhspezet6.jpg', 19, 'oqvbie7dc6uwhspezet6'); 




INSERT INTO images
(src, product_id, public_id)
VALUES('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879628/jmezivatnbsgt2zmhfeq.png', 9, 'jmezivatnbsgt2zmhfeq'), /*9*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879725/qtyhjcvat2a2ahgfyt4i.png', 10, 'qtyhjcvat2a2ahgfyt4i'), /*10*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879995/qfs32un5sowbi8azmhdi.png', 11, 'qfs32un5sowbi8azmhdi'), /*11*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883608/rmtswyokmbz0yzebxrhc.png', 12, 'rmtswyokmbz0yzebxrhc'), /*12*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883846/iaqs0uouaqjjnasskuet.png', 13, 'iaqs0uouaqjjnasskuet'), /*13*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883849/hnvpihrc5qlu8xrf0cvz.png', 13, 'hnvpihrc5qlu8xrf0cvz'), /*13*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884116/of3lkudzlyncolo9pla3.png', 14, 'of3lkudzlyncolo9pla3'), /*14*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884622/nlrrcexue1kj8mzkm282.jpg', 15, 'nlrrcexue1kj8mzkm282'), /*15*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884626/n6en4utqy9oorqokgtm9.jpg', 15, 'n6en4utqy9oorqokgtm9'), /*15*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884627/i7yhdobokag33y2cudwz.jpg', 15, 'i7yhdobokag33y2cudwz'), /*15*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885340/jdqsixyityskrpp9flud.jpg', 16, 'jdqsixyityskrpp9flud'), /*16*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885342/hkuuqn8r5qztepzvqvwu.jpg', 16, 'hkuuqn8r5qztepzvqvwu'), /*16*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885344/ogtuajxoaapmks3bkjx2.jpg', 16, 'ogtuajxoaapmks3bkjx2'), /*16*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885642/dlykpfzxoy2rkhrki3wa.jpg', 17, 'dlykpfzxoy2rkhrki3wa'), /*17*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885644/owhzi8idnz1t3q4ohzzf.jpg', 17, 'owhzi8idnz1t3q4ohzzf'), /*17*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885917/k5f4vp2xr75jk9o9jdly.jpg', 18, 'k5f4vp2xr75jk9o9jdly'), /*18*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885919/lln3tjqwkwo2e1tdjuxy.jpg', 18, 'lln3tjqwkwo2e1tdjuxy'), /*18*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885920/hanlkxvqqe7pvnvwxqim.jpg', 18, 'hanlkxvqqe7pvnvwxqim'), /*18*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886214/ai4z4ngbdyvc4tf19cfz.jpg', 19, 'ai4z4ngbdyvc4tf19cfz'), /*19*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886215/oqvbie7dc6uwhspezet6.jpg', 19, 'oqvbie7dc6uwhspezet6'); /*19*/
