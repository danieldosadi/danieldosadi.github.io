let serviceTaxEnabled=true;
function serviceTaxAmount(subtotal){return serviceTaxEnabled?Math.round(subtotal*10)/100:0;}
function serviceCurrency(value){return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});}
function taxControl(id){const label=document.createElement('label');label.className='service-tax-option';const input=document.createElement('input');input.type='checkbox';input.id=id;input.checked=serviceTaxEnabled;const text=document.createElement('span');text.textContent='Incluir taxa de serviço (10%)';label.append(input,text);input.onchange=()=>{serviceTaxEnabled=input.checked;updateCartUI();updateCheckoutTax();};return label;}
document.getElementById('cart-summary-box').prepend(taxControl('cart-service-tax'));
const checkoutValue=document.getElementById('checkout-total-val');checkoutValue.parentElement.append(taxControl('checkout-service-tax'));
accountTotal=function(){const subtotal=activeOrders.reduce((sum,order)=>sum+order.items.reduce((total,item)=>total+item.total,0),0);return Math.round((subtotal+serviceTaxAmount(subtotal))*100)/100;};
function updateCheckoutTax(){document.getElementById('checkout-service-tax').checked=serviceTaxEnabled;document.getElementById('checkout-total-val').textContent=serviceCurrency(accountTotal());const note=[...checkoutValue.parentElement.querySelectorAll('p')].find(p=>p.textContent.includes('Incluso consumação')||p.dataset.taxNote);if(note){note.dataset.taxNote='true';note.textContent=serviceTaxEnabled?'Consumo + taxa de serviço de 10%.':'Taxa de serviço retirada. Somente o consumo.';}}
const taxOriginalCartUI=updateCartUI;updateCartUI=function(){taxOriginalCartUI();const subtotal=cart.reduce((sum,item)=>sum+item.total,0),tax=serviceTaxAmount(subtotal),total=Math.round((subtotal+tax)*100)/100;document.getElementById('cart-service-tax').checked=serviceTaxEnabled;document.getElementById('summary-service').textContent=serviceCurrency(tax);document.getElementById('summary-total').textContent=serviceCurrency(total);document.getElementById('cart-total-price').textContent=serviceCurrency(total);};
const taxOriginalCheckout=openCheckoutModal;openCheckoutModal=function(){taxOriginalCheckout();updateCheckoutTax();};
updateCartUI();updateCheckoutTax();

