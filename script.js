// For menu toggle
    const menuBtn = document.getElementById('menu-button');
    const menu = document.getElementById('menu')
    const closeBtn = document.getElementById('close');

    // For mobile
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('-translate-x-90')
    })
    closeBtn.addEventListener('click', () => {
        menu.classList.toggle('-translate-x-90')
    })

    // For bigger devices and small tablets
    menuBtn.addEventListener('click', () => {
        menu.classList.remove('sm:-translate-x-90')
        menu.classList.add('sm:translate-x-7')
    })
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('sm:translate-x-7')
        menu.classList.add('-translate-x-90')
    })

    // For tablets
    menuBtn.addEventListener('click', () => {
        menu.classList.remove('md:-translate-x-90')
        menu.classList.add('md:translate-x-9')
    })
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('md:translate-x-9')
        menu.classList.add('md:-translate-x-90')
    })

    // For increase/decrease(add to cart)
    const decrementBtn = document.getElementById('decrement')
    const incrementBtn = document.getElementById('increment')
    const counterElement = document.getElementById('item-counter')
    let counter = parseInt(counterElement.innerText)

    decrementBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter = counter - 1
            counterElement.innerText = counter
        }
    })
    incrementBtn.addEventListener('click', () => {
        counter = counter + 1
        counterElement.innerText = counter
    })

    // for small product preview toggle
    const thumbnails = document.querySelectorAll('.prod-small-prev');
    const overThumbnails = document.querySelectorAll('.over-prod-small-prev');
    const ThumbnailsArray = [...thumbnails]
    const overThumbnailsArray = [...overThumbnails]

    const overPreviousBtn = document.getElementById('over-prev-btn')
    const overNextBtn = document.getElementById('over-next-btn')
    const previousBtn = document.getElementById('previous-btn')
    const nextBtn = document.getElementById('next-btn')

    const prodImg = document.getElementById('prod-img')
    const overProdImg = document.getElementById("over-prod-img")

    // for product image switch and adding border to the small preview buttons
    const imgSwitch = (num, imgId, thumbnailsArray) => {
        imgId.setAttribute('src', `ecommerce-product-page-main/images/image-product-${num + 1}.jpg`)
        // thumbnails[num].classList.add('border-4')
        thumbnailsArray.forEach((element, index) => {
            if (num !== index) {
                element.classList.remove('border-4', 'opacity-40')
            } else {
                element.classList.add('border-4', 'opacity-40')
            }
        });
    }

    // for product image switch with buttons
    const imgSwitchWithButton = (imgId, prev, next) => {
        let currentIndex = 0;
        prev.addEventListener('click', () => {
            currentIndex = currentIndex === 0 ? 3 : currentIndex - 1;
            imgSwitch(currentIndex, imgId, overThumbnailsArray)
        })
        next.addEventListener('click', () => {
            currentIndex = currentIndex === 3 ? 0 : currentIndex + 1;
            imgSwitch(currentIndex, imgId, overThumbnailsArray)
        })
    }

    imgSwitchWithButton(prodImg, previousBtn, nextBtn)
    imgSwitchWithButton(overProdImg, overPreviousBtn, overNextBtn)

    // for product preview toggle with small preview buttons
    const imgChangeWithThumbnail = (imgId, Class) => {
        Class.forEach((spp, index) => {
            spp.addEventListener('click', () => {
                imgSwitch(index, imgId, Class)
            })

        })
    }
    imgChangeWithThumbnail(prodImg, thumbnails)
    imgChangeWithThumbnail(overProdImg, overThumbnails)

    // For overlay product preview toggle
    const overlay = document.getElementById('overlay')
    const overPrev = document.getElementById('over-prod-prev')
    const overPrevClose = document.getElementById('over-prev-close')
    prodImg.addEventListener('click', () => {
        overlay.classList.toggle('lg:block')
        overPrev.classList.toggle('lg:block')
    })
    overPrevClose.addEventListener('click', () => {
        overlay.classList.toggle('lg:block')
        overPrev.classList.toggle('lg:block')
    })

    // For cart
    const cart = document.getElementById('cart-btn')
    const cartInterface = document.getElementById('cart-interface')
    const addToCartBtn = document.getElementById('add-to-card-btn')
    const itemCounter = document.getElementById('item-counter')
    const filledBasket = document.getElementById('filled-basket')
    const emptyBasket = document.getElementById('empty-basket')
    const prodPrice = document.getElementById('prod-price')
    const prodTotalPrice = document.getElementById('prod-total-price')
    const deleteBtn = document.getElementById('delete-btn')
    const prodInCart = document.getElementById('prod-in-cart')

    cart.addEventListener('click',()=>{
        cartInterface.classList.toggle('hidden')
    })
    
    addToCartBtn.addEventListener('click',()=>{
        let counter = parseInt(itemCounter.innerText);
        if(itemCounter.innerText>0){
            filledBasket.classList.remove('hidden')
            emptyBasket.classList.add('hidden')
            prodInCart.classList.remove('hidden')
        }
        if(prodPrice.innerText==0){
            prodTotalPrice.innerText = `${parseFloat(125 * counter)}`
            prodPrice.innerText = counter
            prodInCart.innerText = counter
        }else{
            prodPrice.innerText = parseInt(prodPrice.innerText) + parseInt(counter)
            prodTotalPrice.innerText = parseInt(prodTotalPrice.innerText) + parseFloat(125 * counter)
            prodInCart.innerText = parseInt(prodInCart.innerText) + counter
        }
    })

    deleteBtn.addEventListener('click',()=>{
        prodPrice.innerText = 0
        prodInCart.innerText = 0
        filledBasket.classList.add('hidden')
        emptyBasket.classList.remove('hidden')
        prodInCart.classList.add('hidden')
    })