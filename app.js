// Use the random user API to get information for 12 random employees
$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function(data) {
        let employeeData = data.results;
        let divUsers = document.createElement('div'); //create main users div
        divUsers.className = "users";
        let directoryHeading = document.createElement('h1');
        directoryHeading.innerHTML = "AWESOME STARTUP EMPLOYEE DIRECTORY";
        document.body.appendChild(directoryHeading);
        document.body.appendChild(divUsers);
        const modal = document.createElement('div');
        modal.className = "modal";

        function jsUcfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const appendEmployeeInfo = (i) => {

            const divUser = document.createElement('div'); // create a user div
            divUser.className = 'user'; // give the user div class user
            const divAvatar = document.createElement('div'); // create a avatar div
            divAvatar.className = 'avatar'; // give avatar div class avatar
            const divInfo = document.createElement('div'); // create info div
            divInfo.className = 'info'; // give info div class info
            const avatarImg = document.createElement('img'); // create img element
            const pName = document.createElement('span'); // create name paragraph
            const pEmail = document.createElement('span'); // create email paragraph
            const pLocation = document.createElement('span'); // create location paragraph
            pName.className = "name"; // give name paragraph class name
            pEmail.className = "email"; // give email paragraph class email
            pLocation.className = "location"; // give location paragraph class location
            pName.innerHTML = `${employeeData[i].name.first} ${employeeData[i].name.last}`.replace(/\b\w/g, l => l.toUpperCase()); // give name paragraph JSON name
            pEmail.innerHTML = `${employeeData[i].email}`; // get JSON email for email paragraph
            pLocation.innerHTML = `${employeeData[i].location.city}`.replace(/\b\w/g, l => l.toUpperCase()); // get JSON location for location paragraph
            avatarImg.src = `${employeeData[i].picture.large}`; // get JSON img src for avatar img

            divUsers.appendChild(divUser);
            divUser.appendChild(divAvatar);
            divAvatar.appendChild(avatarImg);
            divUser.appendChild(divInfo);
            divInfo.appendChild(pName);
            divInfo.appendChild(pEmail);
            divInfo.appendChild(pLocation);

        };
        const logData = () => {
            for (let i = 0; i < employeeData.length; i++) {
                appendEmployeeInfo(i);
            }
        };

        logData();

        /////////////// BUILD THE MODAL
        /* MODAL STRUCTURE
        <!-- The Modal -->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="clear"></div>
            <div class="employee-modal-info">
                <div class="modal-primary">
                    <div class="modal-avatar">
                        <img class="modal-image" />
                    </div>
                    <span class="modal-name">First Last</span>
                    <span class="modal-email">email@email.com</span>
                    <span class="modal-location">chicago</span>
                </div>
                <div class="modal-secondary">
                    <span class="modal-cell">555.5555</span>
                    <span class="address">155 aeu 45555</span>
                    <span class="birthday">Birthday: 05/05/85</span>
                </div>
            </div>

        </div>

    </div>
    */
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        const closeSpan = document.createElement('span');
        closeSpan.className = 'close';
        closeSpan.innerHTML = '&times;';
        const clearDiv = document.createElement('div');
        clearDiv.className = 'clear';
        const employeeModalInfo = document.createElement('div');
        employeeModalInfo.className = 'employee-modal-info';
        const modalPrimary = document.createElement('div');
        modalPrimary.className = 'modal-primary';
        const modalSecondary = document.createElement('div');
        modalPrimary.className = 'modal-secondary';
        const modalAvatar = document.createElement('div');
        modalAvatar.className = 'modal-avatar';
        const modalImg = document.createElement('img');
        modalImg.className = 'modal-image';
        const modalName = document.createElement('span');
        modalName.className = 'modal-name';
        const modalEmail = document.createElement('span');
        modalEmail.className = 'modal-email';
        const modalLocation = document.createElement('span');
        modalLocation.className = 'modal-location';
        const modalCell = document.createElement('span');
        modalCell.className = 'modal-cell';
        const address = document.createElement('span');
        address.className = 'address';
        const birthday = document.createElement('span');
        birthday.className = 'birthday';
        const hr = document.createElement('div');
        hr.className = 'hr';


        const appendModal = (i) => {




            modal.appendChild(modalContent);
            modalContent.appendChild(closeSpan);
            modalContent.appendChild(clearDiv);
            modalContent.appendChild(employeeModalInfo);

            employeeModalInfo.appendChild(modalAvatar);
            modalAvatar.appendChild(modalImg);
            employeeModalInfo.appendChild(modalName);
            employeeModalInfo.appendChild(modalEmail);
            employeeModalInfo.appendChild(modalLocation);
            employeeModalInfo.appendChild(hr);
            employeeModalInfo.appendChild(modalCell);
            employeeModalInfo.appendChild(address);
            employeeModalInfo.appendChild(birthday);
            modal.style.display = "block";
            document.body.appendChild(modal);

        }

        // state abbreviation function courtesy : https://gist.github.com/calebgrove/c285a9510948b633aa47
        function abbrState(input, to) {

            var states = [
                ['Arizona', 'AZ'],
                ['Alabama', 'AL'],
                ['Alaska', 'AK'],
                ['Arizona', 'AZ'],
                ['Arkansas', 'AR'],
                ['California', 'CA'],
                ['Colorado', 'CO'],
                ['Connecticut', 'CT'],
                ['Delaware', 'DE'],
                ['Florida', 'FL'],
                ['Georgia', 'GA'],
                ['Hawaii', 'HI'],
                ['Idaho', 'ID'],
                ['Illinois', 'IL'],
                ['Indiana', 'IN'],
                ['Iowa', 'IA'],
                ['Kansas', 'KS'],
                ['Kentucky', 'KY'],
                ['Kentucky', 'KY'],
                ['Louisiana', 'LA'],
                ['Maine', 'ME'],
                ['Maryland', 'MD'],
                ['Massachusetts', 'MA'],
                ['Michigan', 'MI'],
                ['Minnesota', 'MN'],
                ['Mississippi', 'MS'],
                ['Missouri', 'MO'],
                ['Montana', 'MT'],
                ['Nebraska', 'NE'],
                ['Nevada', 'NV'],
                ['New Hampshire', 'NH'],
                ['New Jersey', 'NJ'],
                ['New Mexico', 'NM'],
                ['New York', 'NY'],
                ['North Carolina', 'NC'],
                ['North Dakota', 'ND'],
                ['Ohio', 'OH'],
                ['Oklahoma', 'OK'],
                ['Oregon', 'OR'],
                ['Pennsylvania', 'PA'],
                ['Rhode Island', 'RI'],
                ['South Carolina', 'SC'],
                ['South Dakota', 'SD'],
                ['Tennessee', 'TN'],
                ['Texas', 'TX'],
                ['Utah', 'UT'],
                ['Vermont', 'VT'],
                ['Virginia', 'VA'],
                ['Washington', 'WA'],
                ['West Virginia', 'WV'],
                ['Wisconsin', 'WI'],
                ['Wyoming', 'WY'],
            ];

            if (to == 'abbr') {
                input = input.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                for (i = 0; i < states.length; i++) {
                    if (states[i][0] == input) {
                        return (states[i][1]);
                    }
                }
            }
            else if (to == 'name') {
                input = input.toUpperCase();
                for (i = 0; i < states.length; i++) {
                    if (states[i][1] == input) {
                        return (states[i][0]);
                    }
                }
            }
        }
        // set up a method to show the modal and display employee info on card click
        const userCards = document.getElementsByClassName('user');
        // click on user to display modal
        for (let i = 0; i < userCards.length; i++) {
            userCards[i].onclick = function() {
                console.log('clicked');
                modalImg.src = `${employeeData[i].picture.large}`;
                modalName.innerHTML = `${employeeData[i].name.first}`.charAt(0).toUpperCase() + `${employeeData[i].name.first}`.slice(1) + ` ` + ` ${employeeData[i].name.last}`.charAt(1).toUpperCase() + ` ${employeeData[i].name.last}`.slice(2);
                modalCell.innerHTML = `${employeeData[i].cell}`.replace('-',' ');
                modalEmail.innerHTML = `${employeeData[i].email}`;
                //console.log(`${employeeData[i].location.state}`)
                let employeeState = `${employeeData[i].location.state}`;
                let shortState = abbrState(employeeState, 'abbr');
                //console.log(shortState);
                address.innerHTML = `${employeeData[i].location.street}`.replace(/\b\w/g, l => l.toUpperCase()) + ` ${employeeData[i].location.city}`.replace(/\b\w/g, l => l.toUpperCase())+ `, ` + shortState + ` ${employeeData[i].location.postcode}`.replace(/\b\w/g, l => l.toUpperCase());
                birthday.innerHTML = `Birthday: ` + `${employeeData[i].dob}`.slice(5, 7) + `/` + `${employeeData[i].dob}`.slice(8, 10) + `/` + `${employeeData[i].dob}`.slice(2, 4);
                modalLocation.innerHTML = `${employeeData[i].login.username}`;
                appendModal();

                //modal.style.display = "block"
            }
        }
        // When the user clicks on <span> (x), close the modal
        closeSpan.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


    }
});








// Random Generator url https://randomuser.me

// request a JSON object from the API

// Parse the data

// inject the html elements from javascript
// get the main users div

// create the user div and users info elements

/*

  */

// List the 12 employees in a grid

// Thumbnail image

// Full name

// email

// location

// click the employees image to display a modal with more information

// employees birthday

// address
