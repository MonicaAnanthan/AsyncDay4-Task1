const EMOJI_API = 'https://emojihub.yurace.pro/api/all/category/smileys%20and%20people';
async function getEmojiData() {
    try{
        const response = await fetch(`${EMOJI_API}`);
        const result = await response.json();
        if(result.length > 0){
            renderLists(result);
        }else{
            hideShow("no-data-container", "No Data found");
        }
    } catch(error){
        hideShow("no-data-container", "Something went wrong! No Data Found!!");
        console.log(error);
    }
}
getEmojiData()

function renderLists(data = []){
    const ulElement = document.getElementsByClassName("carousel-inner")[0];
    if(data.length > 0){
        data.forEach((_d) => {
            ulElement.append(createListitem(_d));
        });
    }
}

function createListitem(item = {}) {
    const liItem = document.createElement("div");
    liItem.className = 'carousel-item';
    liItem.innerHTML = `<div class="caro-box">
                    <div class="item-emoji">
                        <span>${item.htmlCode}</span>
                    </div>
                    <div class="item-txt">
                    <h5>${item.name}</h5>
                    <p>${item.category}</p>
                </div>
                </div>`;
    
    $(".carousel-inner").find('.carousel-item:first-child').addClass('active');

    return liItem;
}


function hideShow(classOfElement = "", message = "") {
    const element = document.getElementsByClassName(classOfElement)[0];
    element.className = "no-data-container";
    element.querySelector("p").innerText = message;
}
