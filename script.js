function openModal(team) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');

    // Set the title, description, and additional details based on the team clicked
    switch (team) {
        case 'Mercedes':
            modalTitle.innerText = 'Mercedes';
            modalDescription.innerText = 'Mercedes-AMG Petronas Formula One Team is a British Formula One racing team.';
            modalDetails.innerHTML = `
                <li>Founded: 1954</li>
                <li>Base: Brackley, United Kingdom</li>
                <li>Team Principal: Toto Wolff</li>
                <li>World Championships: 8</li>
            `;
            break;
        case 'Ferrari':
            modalTitle.innerText = 'Ferrari';
            modalDescription.innerText = 'Scuderia Ferrari is the most successful team in Formula One history.';
            modalDetails.innerHTML = `
                <li>Founded: 1929</li>
                <li>Base: Maranello, Italy</li>
                <li>Team Principal: Fred Vasseur</li>
                <li>World Championships: 16</li>
            `;
            break;
        case 'Red Bull Racing':
            modalTitle.innerText = 'Red Bull Racing';
            modalDescription.innerText = 'Red Bull Racing is a Formula One racing team based in Milton Keynes, England, and is owned by the energy drink company Red Bull.';
            modalDetails.innerHTML = `
                <li>Founded: 2005</li>
                <li>Base: Milton Keynes, United Kingdom</li>
                <li>Team Principal: Christian Horner</li>
                <li>World Championships: 4</li>
            `;
            break;
        case 'McLaren':
            modalTitle.innerText = 'McLaren';
            modalDescription.innerText = 'McLaren Racing is a British motor racing team based in Woking, Surrey, England, and is one of the most successful teams in Formula One.';
            modalDetails.innerHTML = `
                <li>Founded: 1963</li>
                <li>Base: Woking, United Kingdom</li>
                <li>Team Principal: Zak Brown</li>
                <li>World Championships: 8</li>
            `;
            break;
        case 'Alpine':
            modalTitle.innerText = 'Alpine';
            modalDescription.innerText = 'Alpine F1 Team is a French Formula One team that competes in the Formula One World Championship, and is a subsidiary of Renault.';
            modalDetails.innerHTML = `
                <li>Founded: 2021</li>
                <li>Base: Enstone, United Kingdom</li>
                <li>Team Principal: Laurent Rossi</li>
                <li>World Championships: 0</li>
            `;
            break;
        case 'Aston Martin':
            modalTitle.innerText = 'Aston Martin';
            modalDescription.innerText = 'Aston Martin Cognizant Formula One Team is a British Formula One racing team based in Silverstone, Northamptonshire, England.';
            modalDetails.innerHTML = `
                <li>Founded: 2021</li>
                <li>Base: Silverstone, United Kingdom</li>
                <li>Team Principal: Mike Krack</li>
                <li>World Championships: 0</li>
            `;
            break;
        case 'Haas':
            modalTitle.innerText = 'Haas';
            modalDescription.innerText = 'Haas F1 Team is an American Formula One team based in Kannapolis, North Carolina, and is the first American team to compete in Formula One since 1986.';
            modalDetails.innerHTML = `
                <li>Founded: 2016</li>
                <li>Base: Kannapolis, United States</li>
                <li>Team Principal: Guenther Steiner</li>
                <li>World Championships: 0</li>
            `;
            break;
        case 'Williams':
            modalTitle.innerText = 'Williams';
            modalDescription.innerText = 'Williams Racing is a British Formula One racing team and constructor based in Grove, Oxfordshire, England.';
            modalDetails.innerHTML = `
                <li>Founded: 1977</li>
                <li>Base: Grove, United Kingdom</li>
                <li>Team Principal: Jost Capito</li>
                <li>World Championships: 9</li>
            `;
            break;
        case 'Racing Bulls':
            modalTitle.innerText = 'Racing Bulls';
            modalDescription.innerText = 'Racing Bulls F1 Team, is an Italian Formula One racing team and constructor that has been competing since the 2024 season.';
            modalDetails.innerHTML = `
                <li>Founded: 2024</li>
                <li>Base: Milan, Italy</li>
                <li>Team Principal: Mario Rossi</li>
                <li>World Championships: 0</li>
            `;
            break;
        case 'Kick Sauber':
            modalTitle.innerText = 'Kick Sauber';
            modalDescription.innerText = 'Sauber Motorsport AG, currently competing in Formula One as Stake F1 Team Kick Sauber, and also known simply as Kick Sauber or Sauber, is a Swiss motorsport engineering company.';
            modalDetails.innerHTML = `
                <li>Founded: 1993</li>
                <li>Base: Hinwil, Switzerland</li>
                <li>Team Principal: Andreas Seidl</li>
                <li>World Championships: 0</li>
            `;
            break;
        default:
            modalTitle.innerText = 'Team Name';
            modalDescription.innerText = 'Description of the team will go here.';
            modalDetails.innerHTML = '';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}