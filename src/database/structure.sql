insert into categories (name) values
('Té Puro'),('Té Aromatizado'),('Infusi�n Herbal'),('Accesorios');

insert into products(name, price, description,coment,weight,offer,stock,discount,category_id) values 
('Té negro en hebras cortas',350,'Té negro en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores para disfrutar de un rico te por la tarde!','Lata 65g',1,10,10,1),
('Té verde en hebras cortas',350,'Té verde en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores para disfrutar de un rico te por la tarde, de sabor dulce y delicado!','Lata 65g',1,10,10,2),
('Té rojo en hebras cortas',350,'Té rojo en hebras cortas, cosechado y producido en Misiones, Argentina.','Excelente mezcla de sabores, Dulce y entrador!','Lata 65g',1,5,10,2),
('Tetera Artesanal de Cer�mica',1980,'Teteras de cer�mica hechas a mano, Capacidad 1 litro. Combinable con set de cuencos','Hermosa tetera para disfrutar de un rico te en hebras', null, 1,3,5,4),
('Cucharita de la Aldea',80,'Cucharita hecha en bamb� o cedro, ideal para servir hebras o az�car','Cucharita de calidad!',null,0,30,0,4),
('Infusor artesanal con cord�n',720,'Infusor hecho a mano con fibras naturales.','Infusor estetico y de buena calidad! Sirve para todo tipo de tazas',null,0,10,0,4),
('Mielera de la Aldea',90,'Mielera en madera ideal para acompa�ar tus momentos de conexi�n con las hebras misioneras.','Excelente producto para disfrutar a�n mas de nuestros tes',null,0,5,0,4),
('Cuenco de cer�mica',820,'Cuenco de cer�mica hecho a mano. Con inscripci�n Iguaz�. Combinable con teteras.','Cuenco artesanal para las buenas energias',null,0,3,0,4),
('Coffee Pack', 950, 'Degustaci�n de caf�s Consultar stock!', 'Pack regalo de 2 mini frascos de caf� instant�neos gourmet. Caramel Machiato, con vainilla y caramel', '70g', 0, 5, NULL, 3), /*Producto 9*/
('Variet�', 1400, 'Presentaci�n ideal para regalo con 5 tubitos de diferentes blends de nuestros t�s en hebras. Inclu�m', 'Caja degustaci�n de t�', NULL, 0, 10, 20, 4),
('Alma Flamenca', 500, 'Yerba org�nica tipo barbacu�, canchada gruesa, secada a la le�a, con suave aroma ahumado, con cascar', 'Con naranja y pomelo', NULL, 0, 5, NULL, 2),
('Infusor de t� de metal bolita', 600, 'Infusor de t� de metal para taza o tetera.', 'infusor para disfrutar nuestros exquisitos t�s', NULL, 0, 3, 25, 4),
('Tea for one', 1500, 'taza + tetera para uno', 'tetera de cer�mica, pintada a mano, varios modelos', NULL, 0, 10, 10, 4),
('Morning Boost', 550, 'T� rojo org�nico en hebras, almendras en trozos, jengibre rallado, gingseng, semillas de hinojo y ca', 'Para despertarte! Es un producto natural, NO un remedio.', NULL, 0, 15, 10, 1),
('Miracle Organic Matcha', 3200, 'El milagroso T� Verde molido japon�s, de calidad ceremonial, un elixir de sabor para regenerarte cad', 'No contiene az�cares ni al�rgenos. No recomendado para ni�os y embarazadas', NULL, 0, 23, 5, 2),
('Infusi�n Magic Alkaline', 1200, 'Infusi�n arom�ticamente bals�mica y dulce con virtudes alcalinizantes que aportan un equilibrio del ', 'Sorprender� el contraste armonioso del bals�mico de la melisa, el romero y la lavanda con un toque p', NULL, 0, 10, 25, 3),
('Infusi�n Cocoa Orange', 800, 'Fragante y antioxidante infusi�n con todo el sabor del cacao y el picante del jengibre.', 'Una infusi�n sin te�na, ideal con leche o bebida vegetal  para un desayuno o merienda cremosa y natu', NULL, 0, 5, 5, 3),
('T� rojo pralin�', 900, 'Aut�ntico pralin� con Pu Erh, algarroba, manzana, avellana, canela, achicoria y flores.', 'Delicioso T� Rojo Pu Erh, similar a la famosa especialidad "pralin�" originaria de la ciudad frances', NULL, 0, 15, NULL, 1),
('T� negro Pakistan�', 700, 'T� Negro con especias de Oriente donde los intensos sabores animan a comenzar el d�a con energ�a.', 'Relaja los m�sculos, mantiene despierto el cuerpo y la mente. Posee un efecto diur�tico y antioxidan', NULL, 0, 14, 5, 1);

insert into ingredients (name,product_id)values
('Canela',1),('Arandanos',1),('Clavo de olor',1),('Ralladura de naranja',1),
('Durazno',2),('P�talos de rosas amarillas',2),('Cardamomo',2),('Aroma frutal',2),
('Hebras de Yunnan', 3),('Cacao',3),('Coco',3),('Trocitos de Toffee',3),('Vainilla',3);

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
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1657884895/ewydsm4qhqonlobr4hxx.jpg',8,null);




/*Insertar nuevos productos*/





INSERT INTO tea.ingredients (name, product_id) 
VALUES ('canchada gruesa', 165), /*producto 9*/
('Yerba org�nica tipo barbacu�', 165),
('cascaritas de naranja y pomelo', 165),
('Manzana', 168), /*producto 12*/
('Romero', 168),
('P�talos y botones de rosa', 168),
('Flores de lavanda', 169), /*Producto 13*/
('Flores de manzanilla', 169),
('Ra�z de diente de le�n', 169),
('Melisa', 170), /*producto 14*/
('Pera', 170),
('Jengibre', 170),
('C�scara de cacao org�nico', 171), /*producto 15*/
('Jengibre', 171),
('Naranja', 171),
('Algarroba', 172), /*producto 16*/
('Manzana', 172),
('Canela', 172),
('Canela', 173), /*producto 17*/
('Cardamomo', 173),
('Clavo', 173);


INSERT INTO tea.images
(src, product_id, public_id)
VALUES('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879628/jmezivatnbsgt2zmhfeq.png', 163, 'jmezivatnbsgt2zmhfeq'), /*9*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879725/qtyhjcvat2a2ahgfyt4i.png', 164, 'qtyhjcvat2a2ahgfyt4i'), /*10*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658879995/qfs32un5sowbi8azmhdi.png', 165, 'qfs32un5sowbi8azmhdi'), /*11*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883608/rmtswyokmbz0yzebxrhc.png', 166, 'rmtswyokmbz0yzebxrhc'), /*12*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883846/iaqs0uouaqjjnasskuet.png', 167, 'iaqs0uouaqjjnasskuet'), /*13*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658883849/hnvpihrc5qlu8xrf0cvz.png', 167, 'hnvpihrc5qlu8xrf0cvz'), /*13*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884116/of3lkudzlyncolo9pla3.png', 168, 'of3lkudzlyncolo9pla3'), /*14*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884622/nlrrcexue1kj8mzkm282.jpg', 169, 'nlrrcexue1kj8mzkm282'), /*15*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884626/n6en4utqy9oorqokgtm9.jpg', 169, 'n6en4utqy9oorqokgtm9'), /*15*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658884627/i7yhdobokag33y2cudwz.jpg', 169, 'i7yhdobokag33y2cudwz'), /*15*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885340/jdqsixyityskrpp9flud.jpg', 170, 'jdqsixyityskrpp9flud'), /*16*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885342/hkuuqn8r5qztepzvqvwu.jpg', 170, 'hkuuqn8r5qztepzvqvwu'), /*16*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885344/ogtuajxoaapmks3bkjx2.jpg', 170, 'ogtuajxoaapmks3bkjx2'), /*16*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885642/dlykpfzxoy2rkhrki3wa.jpg', 171, 'dlykpfzxoy2rkhrki3wa'), /*17*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885644/owhzi8idnz1t3q4ohzzf.jpg', 171, 'owhzi8idnz1t3q4ohzzf'), /*17*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885917/k5f4vp2xr75jk9o9jdly.jpg', 172, 'k5f4vp2xr75jk9o9jdly'), /*18*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885919/lln3tjqwkwo2e1tdjuxy.jpg', 172, 'lln3tjqwkwo2e1tdjuxy'), /*18*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658885920/hanlkxvqqe7pvnvwxqim.jpg', 172, 'hanlkxvqqe7pvnvwxqim'), /*18*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886214/ai4z4ngbdyvc4tf19cfz.jpg', 173, 'ai4z4ngbdyvc4tf19cfz'), /*19*/
('https://res.cloudinary.com/ecommerce-tea/image/upload/v1658886215/oqvbie7dc6uwhspezet6.jpg', 173, 'oqvbie7dc6uwhspezet6'); /*19*/
