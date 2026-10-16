
        // Cardápio de Comida Caseira no Fogão a Lenha
        const menuItems = [
    {
        "id": 1,
        "name": "Segunda-feira · Virado à Paulista",
        "day": "Segunda-feira",
        "price": 34.9,
        "description": "Arroz, tutu de feijão, bisteca, ovo, linguiça, couve e banana.",
        "category": "pratos-dia",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 2,
        "name": "Terça-feira · Bife à Rolê",
        "day": "Terça-feira",
        "price": 34.9,
        "description": "Arroz, feijão e salada.",
        "category": "pratos-dia",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 16,
        "name": "Quarta-feira · Feijoada",
        "day": "Quarta-feira",
        "price": 42.9,
        "description": "Arroz, couve, laranja, torresmo e farofa.",
        "category": "pratos-dia",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 17,
        "name": "Quinta-feira · Macarrão / Massas",
        "day": "Quinta-feira",
        "price": 29.9,
        "description": "Molho à bolonhesa ou ao sugo e queijo ralado.",
        "category": "pratos-dia",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": [
            {
                "title": "Molho à bolonhesa",
                "price": 0
            },
            {
                "title": "Molho ao sugo",
                "price": 0
            }
        ]
    },
    {
        "id": 18,
        "name": "Sexta-feira · Peixe (Pescados)",
        "day": "Sexta-feira",
        "price": 36.9,
        "description": "Arroz, feijão, batata frita e molho tártaro.",
        "category": "pratos-dia",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 3,
        "name": "PF de Bife",
        "category": "executivos",
        "price": 32.9,
        "description": "Bife grelhado acompanhado de arroz, feijão e salada. Ovo disponível como extra.",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": true,
        "options": [
            {
                "title": "Ovo Frito Extra",
                "price": 4
            },
            {
                "title": "Pimenta da Casa no Pote",
                "price": 2
            }
        ]
    },
    {
        "id": 4,
        "name": "Frango a Passarinho com Alho Dourado",
        "category": "executivos",
        "price": 29.9,
        "description": "Pedacinhos de frango crocantes cobertos de alho frito dourado, servido com arroz, feijão e maionese de batata.",
        "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": true,
        "options": [
            {
                "title": "Porção Extra de Maionese Caseira",
                "price": 5
            }
        ]
    },
    {
        "id": 6,
        "name": "Porção de Torresmo de Rolo",
        "category": "acompanhamentos",
        "price": 22,
        "description": "Torresmo artesanal crocante por fora e suculento por dentro. Acompanha fatias de limão caipira.",
        "image": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 7,
        "name": "Mandioca Frita na Hora",
        "category": "acompanhamentos",
        "price": 18,
        "description": "Mandioca amarela bem macia e frita, polvilhada com cheiro-verde.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 8,
        "name": "Jarra de Suco Natural de Laranja (1 Litro)",
        "category": "bebidas",
        "price": 18,
        "description": "Jarra de suco da fruta feito na hora bem geladinho.",
        "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": [
            {
                "title": "Sem Açúcar",
                "price": 0
            },
            {
                "title": "Com Bastante Gelo",
                "price": 0
            }
        ]
    },
    {
        "id": 9,
        "name": "Limonada Suíça com Leite Condensado",
        "category": "bebidas",
        "price": 12,
        "description": "Copo grande de limonada cremosa batida com gelo.",
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 10,
        "name": "Guaraná Guaratini / Refrigerante Lata",
        "category": "bebidas",
        "price": 6.5,
        "description": "Lata 350ml bem gelada.",
        "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": [
            {
                "title": "Copo com Gelo e Limão",
                "price": 0
            }
        ]
    },
    {
        "id": 11,
        "name": "Pudim de Leite Condensado Caseiro",
        "category": "sobremesas",
        "price": 12,
        "description": "Fatia generosa de pudim sem furinhos com bastante calda de caramelo.",
        "image": "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 12,
        "name": "Doce de Leite na Palha com Queijo Minas",
        "category": "sobremesas",
        "price": 14,
        "description": "Pratinho com doce de leite artesanal mineiro acompanhado de queijo curado.",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": false,
        "options": []
    },
    {
        "id": 19,
        "name": "PF de Filé de Frango Grelhado",
        "price": 29.9,
        "description": "Filé de frango grelhado, arroz, feijão e salada.",
        "category": "executivos",
        "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": true,
        "options": [
            {
                "title": "Ovo Frito Extra",
                "price": 4
            }
        ]
    },
    {
        "id": 20,
        "name": "PF de Filé de Frango à Milanesa",
        "price": 32.9,
        "description": "Filé de frango empanado e frito, arroz, feijão e salada.",
        "category": "executivos",
        "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": true,
        "options": [
            {
                "title": "Ovo Frito Extra",
                "price": 4
            }
        ]
    },
    {
        "id": 21,
        "name": "PF de Filé de Frango à Parmegiana",
        "price": 36.9,
        "description": "Filé de frango empanado com molho de tomate e queijo, acompanhado de arroz, feijão e salada.",
        "category": "executivos",
        "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80",
        "hasBeanChoice": true,
        "options": [
            {
                "title": "Ovo Frito Extra",
                "price": 4
            }
        ]
    }
];

        menuItems.splice(menuItems.findIndex(item=>item.category==='bebidas'),0,...[{"id":13,"name":"Suco 300 ml","category":"bebidas","price":8,"description":"Suco natural de laranja, preparado na hora. Copo de 300 ml.","image":"https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80","hasBeanChoice":false,"options":[{"title":"Sem Açúcar","price":0},{"title":"Com Gelo","price":0}]},{"id":14,"name":"Suco 500 ml","category":"bebidas","price":12,"description":"Suco natural de laranja, preparado na hora. Copo de 500 ml.","image":"https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80","hasBeanChoice":false,"options":[{"title":"Sem Açúcar","price":0},{"title":"Com Gelo","price":0}]}]);
        const juiceFlavors=[{name:'Laranja',ingredients:'Laranja espremida, sem adição de água.'},{name:'Acerola',ingredients:'Polpa de acerola batida com água.'},{name:'Uva',ingredients:'Suco integral de uva, sem adição de água.'},{name:'Morango',ingredients:'Morango batido com água.'},{name:'Detox',ingredients:'Couve, abacaxi, limão, gengibre e água.'}];
menuItems.filter(item=>[8,13,14].includes(item.id)).forEach(item=>{item.isJuice=true;item.name=item.id===8?'Suco 1 L':item.name;item.description='Escolha o sabor: Laranja, Acerola, Uva, Morango ou Detox. Veja a composição em Escolher / Opções.';});
let tableNumber = "";
        let clientName = "";
        let cart = [];
        let activeOrders = [];
        let currentSelectedItem = null;
        let modalQty = 1;
        let selectedPayment = null;

        // Iniciar Sessão da Mesa
        function initSession(event) {
            event.preventDefault();
            const tableVal = document.getElementById('table-select').value;
            const clientVal = document.getElementById('client-name-input').value.trim();

            if (!tableVal) return;

            tableNumber = tableVal;
            clientName = clientVal || "Cliente";

            document.getElementById('display-table').innerText = tableNumber;
            document.getElementById('display-client').innerText = clientName;
            document.getElementById('cart-modal-subtitle').innerText = `${tableNumber} • ${clientName}`;

            document.getElementById('table-modal').classList.add('hidden');
            renderMenu('todos');
        }

        // Renderizar Cardápio na Tela
        function renderMenu(category) {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = '';

            const dayName=new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',weekday:'long'}).format(new Date());
            const available=menuItems.filter(item=>item.category!=='pratos-dia'||item.name.toLocaleLowerCase('pt-BR').startsWith(dayName.toLocaleLowerCase('pt-BR')+' ·'));
            const filtered=category==='todos'?available:available.filter(item=>item.category===category);
            if(category==='pratos-dia'&&!filtered.length){const empty=document.createElement('p');empty.className='text-stone-600 p-4';empty.textContent='Não há prato do dia aos sábados e domingos. Escolha uma opção em Prato Feito / Executivo.';grid.append(empty);}

            filtered.forEach(item => {
                const card = document.createElement('div');
                card.className = "bg-white rounded-2xl border border-cream-300 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between";
                card.innerHTML = `
                    <div class="relative h-44 cursor-pointer" onclick="openItemModal(${item.id})">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/600x400/ebdcc3/7c2d12?text=Comida+Caseira'">
                        <div class="absolute bottom-2 right-2 bg-terracota-800/90 text-white font-bold text-xs px-3 py-1 rounded-xl shadow">
                            R$ ${item.price.toFixed(2).replace('.', ',')}
                        </div>
                    </div>
                    <div class="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="font-bold text-stone-900 font-display text-base mb-1 hover:text-terracota-600 transition-colors cursor-pointer" onclick="openItemModal(${item.id})">${item.name}</h3>
                            <p class="text-stone-500 text-xs line-clamp-2 mb-3 leading-relaxed">${item.description}</p>
                        </div>
                        <button onclick="openItemModal(${item.id})" class="w-full py-2.5 bg-cream-100 hover:bg-terracota-600 hover:text-white text-terracota-800 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 border border-cream-300 group">
                            <i class="fa-solid fa-plus text-terracota-600 group-hover:text-white transition-colors"></i>
                            <span>Escolher / Opções</span>
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Filtro de Categorias
        function filterCategory(cat) {
            document.querySelectorAll('.category-btn').forEach(button=>{
                const selected=button.getAttribute('onclick').includes("'"+cat+"'");
                button.classList.toggle('active',selected);
                button.setAttribute('aria-pressed',String(selected));
                button.classList.remove('bg-terracota-600','text-white','shadow-md','shadow-terracota-600/20','bg-white','text-stone-700');
            });
            renderMenu(cat);
        }

        // Abrir Modal de Opções do Prato
        function openItemModal(id) {
            currentSelectedItem = menuItems.find(i => i.id === id);
            modalQty = 1;

            document.getElementById('modal-item-img').src = currentSelectedItem.image;
            document.getElementById('modal-item-name').innerText = currentSelectedItem.name;
            document.getElementById('modal-item-desc').innerText = currentSelectedItem.description;
            document.getElementById('modal-item-price').innerText = `R$ ${currentSelectedItem.price.toFixed(2).replace('.', ',')}`;
            document.getElementById('modal-item-obs').value = '';
            document.getElementById('modal-qty').innerText = modalQty;

            // Mostrar/Esconder opção de escolha do feijão
            const beanBox = document.getElementById('bean-selection-box');
            if (currentSelectedItem.hasBeanChoice) {
                beanBox.classList.remove('hidden');
            } else {
                beanBox.classList.add('hidden');
            }

            // Opcionais adicionais
            const optionsContainer = document.getElementById('modal-options-container');
            const optionsList = document.getElementById('modal-options-list');
            optionsList.innerHTML = '';

            if (currentSelectedItem.options && currentSelectedItem.options.length > 0) {
                optionsContainer.classList.remove('hidden');
                currentSelectedItem.options.filter(opt=>!currentSelectedItem.isJuice).forEach(opt => {
                    const label = document.createElement('label');
                    label.className = "flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-terracota-500 transition-all";
                    label.innerHTML = `
                        <div class="flex items-center gap-2">
                            <input type="checkbox" name="modal-option" value="${opt.title}" data-price="${opt.price}" class="w-4 h-4 text-terracota-600 rounded focus:ring-terracota-500">
                            <span class="text-xs font-semibold text-stone-700">${opt.title}</span>
                        </div>
                        <span class="text-xs font-bold text-terracota-700">${opt.price > 0 ? '+ R$ ' + opt.price.toFixed(2).replace('.', ',') : 'Grátis'}</span>
                    `;
                    optionsList.appendChild(label);
                });
            } else {
                optionsContainer.classList.add('hidden');
            }

            const flavors=document.getElementById('juice-flavor-box');flavors.replaceChildren();flavors.hidden=!currentSelectedItem.isJuice;
            if(currentSelectedItem.isJuice){const legend=document.createElement('legend');legend.textContent='Escolha o sabor';legend.className='font-bold text-terracota-800 mb-2';flavors.append(legend);for(const flavor of juiceFlavors){const label=document.createElement('label');label.className='juice-flavor';const radio=document.createElement('input');radio.type='radio';radio.name='juice-flavor';radio.value=flavor.name;const details=document.createElement('span'),name=document.createElement('strong'),description=document.createElement('small');name.textContent=flavor.name;description.textContent=flavor.ingredients;details.append(name,description);label.append(radio,details);flavors.append(label);}const note=document.createElement('p');note.textContent='Mesmo preço para todos os sabores. Açúcar e gelo podem ser ajustados nas opções e observações.';note.className='text-xs text-stone-500 mt-2';flavors.append(note);}
            updateModalTotal();

            const modal = document.getElementById('item-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeItemModal() {
            const modal = document.getElementById('item-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function adjustModalQty(change) {
            modalQty += change;
            if (modalQty < 1) modalQty = 1; if(modalQty > 20) modalQty = 20;
            document.getElementById('modal-qty').innerText = modalQty;
            updateModalTotal();
        }

        function updateModalTotal() {
            let unitPrice = currentSelectedItem.price;
            document.querySelectorAll('input[name="modal-option"]:checked').forEach(cb => {
                unitPrice += parseFloat(cb.getAttribute('data-price') || 0);
            });
            const total = unitPrice * modalQty;
            document.getElementById('modal-total-btn').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

        document.addEventListener('change', function(e) {
            if (e.target && e.target.name === 'modal-option') {
                updateModalTotal();
            }
        });

        // Adicionar ao Carrinho da Mesa
        function addCurrentItemToCart() {
            let unitPrice = currentSelectedItem.price;
            const selectedOpts = [];
            if(currentSelectedItem.category==='bebidas'&&!currentSelectedItem.isJuice){const temp=document.querySelector('[name="beverage-temp"]:checked');if(!temp||document.getElementById('modal-add-btn').disabled){showCustomAlert('Complete as opções','Escolha a temperatura e continue para observação.','warning');return;}selectedOpts.push('Temperatura: '+temp.value);if(currentSelectedItem.sodaSize){selectedOpts.push(document.querySelector('[name="beverage-ice"]:checked').value);if(document.getElementById('beverage-lemon').checked)selectedOpts.push('Com limão');selectedOpts.push('Copos extras 180 ml: '+document.getElementById('beverage-cups').value);}}
            if(currentSelectedItem.sodaSize){const soda=document.querySelector('[name="soda-choice"]:checked');if(!soda){showCustomAlert('Escolha o refrigerante','Selecione a marca e a versão antes de adicionar.','warning');return;}selectedOpts.push(soda.value);}
            if(currentSelectedItem.isJuice){const flavor=document.querySelector('input[name="juice-flavor"]:checked');if(!flavor){showCustomAlert('Escolha o sabor','Selecione Laranja, Acerola, Uva, Morango ou Detox antes de adicionar.','warning');return;}if(!juiceReady||!juiceOptionsValid()){showCustomAlert('Complete as opções','Escolha as opções da bebida e clique em Continuar para observação.','warning');return;}selectedOpts.push('Sabor: '+flavor.value);const water=document.querySelector('[name=juice-water]:checked');if(water)selectedOpts.push('Temperatura: '+water.value);document.querySelectorAll('[name=juice-remove]:checked').forEach(input=>selectedOpts.push('Sem '+input.value.toLowerCase()));selectedOpts.push(document.querySelector('[name=juice-ice]:checked').value);selectedOpts.push('Copos 180 ml: '+document.getElementById('juice-cups').value);}

            // Adiciona escolha do feijão se aplicável
            if (currentSelectedItem.hasBeanChoice) {
                const beanVal = document.querySelector('input[name="bean-choice"]:checked')?.value;
                if (beanVal) selectedOpts.push(beanVal);
            }

            // Opcionais selecionados
            document.querySelectorAll('input[name="modal-option"]:checked').forEach(cb => {
                unitPrice += parseFloat(cb.getAttribute('data-price') || 0);
                selectedOpts.push(cb.value);
            });

            const obs = document.getElementById('modal-item-obs').value.trim();

            const cartItem = {
                cartId: Date.now() + Math.random(),
                name: currentSelectedItem.name,
                unitPrice: unitPrice,
                quantity: modalQty,
                options: selectedOpts,
                observation: obs,
                total: unitPrice * modalQty
            };

            cart.push(cartItem);
            closeItemModal();
            updateCartUI();

            showCustomAlert("Item Adicionado!", `${modalQty}x ${currentSelectedItem.name} colocado na comanda.`, "success");
        }

        // Atualizar visual da Comanda
        function updateCartUI() {
            const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
            const subtotal = cart.reduce((acc, item) => acc + item.total, 0);
            const serviceTax = subtotal * 0.10;
            const grandTotal = subtotal + serviceTax;

            const cartBar = document.getElementById('cart-bar');
            if (totalItems > 0) {
                cartBar.classList.remove('translate-y-full');
            } else {
                cartBar.classList.add('translate-y-full');
            }

            document.getElementById('cart-badge').innerText = totalItems;
            document.getElementById('cart-total-price').innerText = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;

            const container = document.getElementById('cart-items-container');
            const emptyState = document.getElementById('cart-empty-state');
            const summaryBox = document.getElementById('cart-summary-box');

            container.innerHTML = '';

            if (cart.length === 0) {
                emptyState.classList.remove('hidden');
                summaryBox.classList.add('hidden');
                document.getElementById('send-order-btn').classList.add('opacity-50', 'pointer-events-none');
            } else {
                emptyState.classList.add('hidden');
                summaryBox.classList.remove('hidden');
                document.getElementById('send-order-btn').classList.remove('opacity-50', 'pointer-events-none');

                cart.forEach((item, index) => {
                    const div = document.createElement('div');
                    div.className = "py-3 flex flex-col gap-1";
                    div.innerHTML = `
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="font-bold text-stone-900 text-sm font-display">${item.quantity}x ${item.name}</h4>
                                ${item.options.length > 0 ? `<p class="text-xs text-terracota-700 font-semibold">+ ${item.options.join(', ')}</p>` : ''}
                                ${item.observation ? `<p class="text-xs text-stone-500 italic">Obs: "${escapeHTML(item.observation)}"</p>` : ''}
                            </div>
                            <div class="text-right">
                                <span class="font-bold text-stone-900 text-sm">R$ ${item.total.toFixed(2).replace('.', ',')}</span>
                                <button onclick="removeFromCart(${index})" class="block text-xs text-red-600 hover:underline mt-1 ml-auto font-semibold">Remover</button>
                            </div>
                        </div>
                    `;
                    container.appendChild(div);
                });
            }

            document.getElementById('summary-subtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            document.getElementById('summary-service').innerText = `R$ ${serviceTax.toFixed(2).replace('.', ',')}`;
            document.getElementById('summary-total').innerText = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
            document.getElementById('checkout-total-val').innerText = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function openCartModal() {
            const modal = document.getElementById('cart-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeCartModal() {
            const modal = document.getElementById('cart-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Mandar Pedido para o Fogão / Cozinha
        function sendOrderToKitchen() {
            if (cart.length === 0) return;

            const orderGroup = {
                id: nextOrderId++,
                items: [...cart],
                status: 'Na Fila do Fogão 🪵',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            activeOrders.push(orderGroup);
            cart = []; // Limpa o carrinho atual
            closeCartModal();
            updateCartUI();
            renderActiveOrders();

            showCustomAlert("Pedido Enviado!", `Seu pedido com a Senha #${orderGroup.id} foi registrado na demonstração!`, "success");
        }

        // Renderizar acompanhamento dos pedidos
        function renderActiveOrders() {
            const section = document.getElementById('active-orders-section');
            const list = document.getElementById('active-orders-list');
            list.innerHTML = '';

            if (activeOrders.length === 0) {
                section.classList.add('hidden');
                return;
            }

            section.classList.remove('hidden');

            activeOrders.forEach(order => {
                const div = document.createElement('div');
                div.className = "bg-white p-3 rounded-xl border border-amber-200 text-xs flex items-center justify-between";
                div.innerHTML = `
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-stone-900 font-display">Pedido #${order.id}</span>
                            <span class="bg-amber-100 text-terracota-800 px-2 py-0.5 rounded-full font-bold">${order.status}</span>
                        </div>
                        <p class="text-stone-500 mt-0.5">${order.items.reduce((acc, i) => acc + i.quantity, 0)} prato(s) • Enviado às ${order.time}</p>
                    </div>
                    <button onclick="advanceOrderStatus(${order.id})" class="bg-amber-100 hover:bg-amber-200 text-terracota-800 px-2.5 py-1 rounded-lg font-bold transition-colors">
                        Atualizar
                    </button>
                `;
                list.appendChild(div);
            });
        }

        function advanceOrderStatus(orderId) {
            const order = activeOrders.find(o => o.id === orderId);
            if (!order) return;

            if (order.status === 'Na Fila do Fogão 🪵') {
                order.status = 'Preparando na Panela 🍲';
            } else if (order.status === 'Preparando na Panela 🍲') {
                order.status = 'A Caminho da Mesa! 🍽️';
            } else {
                order.status = 'Servido na Mesa ✅';
            }
            renderActiveOrders();
            showCustomAlert("Status Atualizado", `O Pedido #${order.id} agora está: ${order.status}`, "info");
        }

        // Abrir Tela de Pagamento/Checkout
        function openCheckoutModal() {
            closeCartModal();
            const modal = document.getElementById('checkout-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeCheckoutModal() {
            const modal = document.getElementById('checkout-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Selecionar Forma de Pagamento
        function selectPaymentMethod(method) {
            selectedPayment = method;

            // Resetar visual dos botões
            document.querySelectorAll('.pay-method-btn').forEach(b => {
                b.classList.remove('border-terracota-600', 'bg-terracota-50');
                b.classList.add('border-stone-200', 'bg-white');
            });

            document.getElementById(`pay-btn-${method}`).classList.remove('border-stone-200', 'bg-white');
            document.getElementById(`pay-btn-${method}`).classList.add('border-terracota-600', 'bg-terracota-50');

            // Exibir área de detalhes
            document.getElementById('payment-details-area').classList.remove('hidden');
            document.getElementById('payment-pix-details').classList.add('hidden');
            document.getElementById('payment-card-details').classList.add('hidden');
            document.getElementById('payment-cash-details').classList.add('hidden');

            if (method === 'pix') {
                document.getElementById('payment-pix-details').classList.remove('hidden');
            } else if (method === 'card') {
                document.getElementById('payment-card-details').classList.remove('hidden');
            } else if (method === 'cash') {
                document.getElementById('payment-cash-details').classList.remove('hidden');
            }

            // Habilitar botão
            const finishBtn = document.getElementById('finish-pay-btn');
            finishBtn.disabled = false;
            finishBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        function copyPixCode() {
            const dummyPix = "DEMONSTRACAO-SEM-VALOR-DE-PAGAMENTO";
            
            // Copiar via execCommand para garantia de suporte
            const el = document.createElement('textarea');
            el.value = dummyPix;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

            showCustomAlert("Copiado!", "Texto demonstrativo copiado. Não possui valor para pagamento.", "success");
        }

        function finishPayment() {
            if (!selectedPayment) return;

            closeCheckoutModal();

            let message = "";
            if (selectedPayment === 'pix') {
                message = "Simulação concluída. Nenhum PIX foi realizado ou comprovante enviado.";
            } else if (selectedPayment === 'card') {
                message = "Simulação de pagamento com cartão concluída. Nenhum chamado real foi enviado.";
            } else {
                const change = document.getElementById('cash-change-input').value;
                message = change ? `Simulação em dinheiro com troco para R$ ${change}. Nenhuma cobrança realizada.` : "Simulação em dinheiro concluída. Nenhuma cobrança realizada.";
            }

            showCustomAlert("Obrigado pela Preferência!", message, "success");
            activeOrders = [];
            renderActiveOrders();
        }

        // Chamar Garçom
        function callWaiter() {
            if (!tableNumber) return;
            showCustomAlert("Garçom Avisado", `Simulação de chamada para ${tableNumber}. Nenhum atendimento real foi notificado.`, "info");
        }

        // Alerta Modal
        function showCustomAlert(title, message, type = "success") {
            document.getElementById('alert-title').innerText = title;
            document.getElementById('alert-message').innerText = message;
            
            const iconDiv = document.getElementById('alert-icon');
            if (type === "success") {
                iconDiv.className = "w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl";
                iconDiv.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            } else if (type === "info") {
                iconDiv.className = "w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl";
                iconDiv.innerHTML = '<i class="fa-solid fa-bell"></i>';
            } else {
                iconDiv.className = "w-16 h-16 bg-amber-100 text-terracota-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl";
                iconDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
            }

            const alertModal = document.getElementById('custom-alert');
            alertModal.classList.remove('hidden');
            alertModal.classList.add('flex');
        }

        function closeCustomAlert() {
            const alertModal = document.getElementById('custom-alert');
            alertModal.classList.add('hidden');
            alertModal.classList.remove('flex');
        }
    
// Persistence and demonstrative account handling.
const RESTAURANT_KEY='sabor-de-casa-v1';let nextOrderId=100,closedOrders=[];
function escapeHTML(value){return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');}
function storeSession(){try{localStorage.setItem(RESTAURANT_KEY,JSON.stringify({tableNumber,clientName,cart,activeOrders,nextOrderId,closedOrders}));}catch{showCustomAlert('Armazenamento indisponível','Não foi possível salvar no navegador. Os dados desta sessão podem ser perdidos.','warning');}}
function accountTotal(){return Math.round(activeOrders.reduce((sum,order)=>sum+order.items.reduce((total,item)=>total+item.total,0),0)*110)/100;}
const originalInit=initSession;initSession=function(event){originalInit(event);storeSession();};
const originalAdd=addCurrentItemToCart;addCurrentItemToCart=function(){originalAdd();storeSession();};
const originalRemove=removeFromCart;removeFromCart=function(index){originalRemove(index);storeSession();};
const originalSend=sendOrderToKitchen;sendOrderToKitchen=function(){originalSend();storeSession();};
const originalAdvance=advanceOrderStatus;advanceOrderStatus=function(id){originalAdvance(id);storeSession();};
const originalCheckout=openCheckoutModal;openCheckoutModal=function(){if(cart.length){showCustomAlert('Envie os itens primeiro','Há itens na comanda que ainda não foram enviados. Envie-os antes de fechar a conta.','info');return;}if(!activeOrders.length){showCustomAlert('Sua conta está vazia','Escolha um prato e envie o pedido antes de simular o fechamento.','info');return;}originalCheckout();selectedPayment=null;document.getElementById('finish-pay-btn').disabled=true;document.getElementById('payment-details-area').classList.add('hidden');document.querySelectorAll('.pay-method-btn').forEach(b=>{b.classList.remove('border-terracota-600','bg-terracota-50');b.classList.add('border-stone-200','bg-white');});document.getElementById('checkout-total-val').textContent=accountTotal().toLocaleString('pt-BR',{style:'currency',currency:'BRL'});};
const originalFinish=finishPayment;finishPayment=function(){if(!selectedPayment)return;if(selectedPayment==='cash'){const value=document.getElementById('cash-change-input').value;if(value&&(!Number.isFinite(Number(value))||Number(value)<accountTotal())){showCustomAlert('Confira o valor','O valor para troco precisa ser igual ou maior que o total da conta.','warning');return;}}closedOrders.push(...activeOrders.map(order=>({...order,payment:selectedPayment,closedAt:new Date().toISOString()})));originalFinish();storeSession();};
try{const saved=JSON.parse(localStorage.getItem(RESTAURANT_KEY));if(saved&&Array.isArray(saved.cart)&&Array.isArray(saved.activeOrders)){tableNumber=typeof saved.tableNumber==='string'?saved.tableNumber:'';clientName=typeof saved.clientName==='string'?saved.clientName:'Cliente';cart=saved.cart;activeOrders=saved.activeOrders;nextOrderId=Number.isInteger(saved.nextOrderId)?saved.nextOrderId:100;closedOrders=Array.isArray(saved.closedOrders)?saved.closedOrders:[];if(tableNumber){document.getElementById('display-table').textContent=tableNumber;document.getElementById('display-client').textContent=clientName;document.getElementById('cart-modal-subtitle').textContent=tableNumber+' • '+clientName;document.getElementById('table-modal').classList.add('hidden');}}}catch{}
document.getElementById('client-name-input').maxLength=80;document.getElementById('modal-item-obs').maxLength=240;
renderMenu('todos');updateCartUI();renderActiveOrders();

const navigationHeader=document.getElementById('site-header'),navigationCategories=document.getElementById('category-navigation');function sizeNavigation(){document.documentElement.style.setProperty('--header-height',navigationHeader.getBoundingClientRect().height+'px');document.documentElement.style.setProperty('--categories-height','0px');}new ResizeObserver(sizeNavigation).observe(navigationHeader);new ResizeObserver(sizeNavigation).observe(navigationCategories);sizeNavigation();

