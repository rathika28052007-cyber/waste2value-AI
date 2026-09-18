// HOME → ANALYZER

function goToAnalyzer() {
    document.getElementById("analyzer")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// IMAGE PREVIEW

document.getElementById("wasteImage")
    .addEventListener("change", function(event) {

        const file = event.target.files[0];

        if (file) {

            const preview =
                document.getElementById("preview");

            preview.src = URL.createObjectURL(file);

            preview.style.display = "block";
        }
    });


// AI WASTE ANALYZER

function analyzeWaste() {

    const type =
        document.getElementById("wasteType").value;

    const quantity =
        Number(document.getElementById("quantity").value);

    const result =
        document.getElementById("analysisResult");


    if (!type || quantity <= 0) {

        result.innerHTML = `
            <div class="analysis-card">
                ⚠️ Please select waste type and enter quantity.
            </div>
        `;

        return;
    }


    const wasteData = {

        plastic: {
            name: "Plastic",
            reuse: "Recycled plastic products",
            industry: "Packaging, Textile and Manufacturing",
            recovery: 80
        },

        paper: {
            name: "Paper",
            reuse: "Recycled paper and packaging",
            industry: "Printing and Packaging",
            recovery: 85
        },

        metal: {
            name: "Metal",
            reuse: "Recovered metal raw material",
            industry: "Automobile and Manufacturing",
            recovery: 90
        },

        food: {
            name: "Food Waste",
            reuse: "Compost and biogas",
            industry: "Agriculture and Energy",
            recovery: 70
        },

        textile: {
            name: "Textile",
            reuse: "Recycled fabric products",
            industry: "Textile and Fashion",
            recovery: 75
        },

        electronic: {
            name: "Electronic Waste",
            reuse: "Material recovery and component recycling",
            industry: "Electronics and Recycling",
            recovery: 65
        }
    };


    const data = wasteData[type];

    const recoverable =
        quantity * data.recovery / 100;


    result.innerHTML = `

        <div class="analysis-card">

            <h3>🤖 AI Analysis Result</h3>

            <br>

            <p>
                <b>Detected Waste:</b>
                ${data.name}
            </p>

            <p>
                <b>Quantity:</b>
                ${quantity} kg
            </p>

            <p>
                <b>Estimated Recoverable:</b>
                ${recoverable.toFixed(2)} kg
            </p>

            <p>
                <b>Possible Reuse:</b>
                ${data.reuse}
            </p>

            <p>
                <b>Potential Industries:</b>
                ${data.industry}
            </p>

            <br>

            <p>
                ♻️ This waste has potential for
                resource recovery and reuse.
            </p>

        </div>

    `;

}


// VALUE CALCULATOR

function calculateValue() {

    const price =
        Number(document.getElementById("calcType").value);

    const quantity =
        Number(document.getElementById("calcQuantity").value);

    const processing =
        Number(document.getElementById("processingCost").value) || 0;


    if (quantity <= 0) {

        document.getElementById("calculatorResult")
            .innerHTML =
            "⚠️ Enter a valid quantity.";

        return;
    }


    const recoveryRate = 0.80;

    const recoverable =
        quantity * recoveryRate;

    const recoverableValue =
        recoverable * price;

    const netValue =
        recoverableValue - processing;


    document.getElementById("calculatorResult")
        .innerHTML = `

        <h3>💰 Value Estimation</h3>

        <br>

        <p>
            Recoverable Quantity:
            <b>${recoverable.toFixed(2)} kg</b>
        </p>

        <p>
            Estimated Recoverable Value:
            <b>₹${recoverableValue.toFixed(2)}</b>
        </p>

        <p>
            Processing Cost:
            <b>₹${processing.toFixed(2)}</b>
        </p>

        <hr>

        <h3>
            Potential Net Value:
            ₹${netValue.toFixed(2)}
        </h3>

    `;

}


// MARKETPLACE

function addListing() {

    const name =
        document.getElementById("sellerName").value;

    const waste =
        document.getElementById("marketWaste").value;

    const quantity =
        document.getElementById("marketQuantity").value;

    const price =
        document.getElementById("marketPrice").value;


    if (!name || !waste || !quantity || !price) {

        alert("Please fill all marketplace fields.");

        return;
    }


    const listings =
        document.getElementById("marketListings");


    const newListing =
        document.createElement("div");

    newListing.className = "listing";


    newListing.innerHTML = `

        <div>

            <h3>🏭 ${name}</h3>

            <p>
                ${waste} • ${quantity} kg
            </p>

            <b>
                ₹${price}/kg
            </b>

        </div>

        <button onclick="connectBuyer('${name}')">
            Connect
        </button>

    `;


    listings.prepend(newListing);


    document.getElementById("sellerName").value = "";
    document.getElementById("marketWaste").value = "";
    document.getElementById("marketQuantity").value = "";
    document.getElementById("marketPrice").value = "";

}


// CONNECT BUYER

function connectBuyer(name) {

    alert(
        "Connection request sent to " +
        name +
        " ✅"
    );

}
