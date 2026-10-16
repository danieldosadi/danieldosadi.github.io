// Imagens ilustrativas geradas por IA para os itens do cardápio.
const menuImageIds=new Set([3,1,2,16,17,18,6,7,8,9,10,11,12,19,20,21,13,22,23,24,25,26,14,27,29,32,30,28,31,15]);
for(const item of menuItems)if(menuImageIds.has(item.id))item.image='assets/cardapio/item-'+item.id+'.webp';
renderMenu('todos');
