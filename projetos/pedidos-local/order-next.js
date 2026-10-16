function showOrderNextStep(message='Item adicionado à comanda!'){
 if(!cart.some(item=>!item.isComboDiscount))return;
 closeCustomAlert();document.getElementById('order-next-dialog')?.remove();
 const dialog=document.createElement('dialog');dialog.id='order-next-dialog';dialog.className='order-next-dialog';dialog.setAttribute('aria-labelledby','order-next-title');
 const icon=document.createElement('div');icon.className='order-next-icon';icon.textContent='✓';icon.setAttribute('aria-hidden','true');
 const title=document.createElement('h2');title.id='order-next-title';title.textContent='O que deseja fazer agora?';const note=document.createElement('p');note.textContent=message;
 const summary=document.createElement('div');summary.className='order-next-summary';const count=cart.filter(item=>!item.isComboDiscount).reduce((sum,item)=>sum+item.quantity,0);summary.textContent=count+' item(ns) na comanda · '+document.getElementById('summary-total').textContent;
 const actions=document.createElement('div');actions.className='order-next-actions';const more=document.createElement('button');more.textContent='Continuar comprando';more.className='order-next-more';const send=document.createElement('button');send.textContent='Mandar o pedido →';send.className='order-next-send';
 function close(){dialog.close();dialog.remove();}
 function shopping(){close();if(typeof customerMenuOpen!=='undefined'){customerMenuOpen=true;trackingView();}}
 more.onclick=shopping;send.onclick=()=>{close();sendOrderToKitchen();};dialog.addEventListener('cancel',event=>{event.preventDefault();shopping();});
 actions.append(more,send);const review=document.createElement('button');review.className='order-next-review';review.textContent='Revisar comanda';review.onclick=()=>{close();openCartModal();};dialog.append(icon,title,note,summary,actions,review);document.body.append(dialog);dialog.showModal();more.focus();
}