// to get current year

/** google_map js **/

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

document.addEventListener("DOMContentLoaded", function () {
    const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));

    document.querySelectorAll(".view-details").forEach((btn) => {
        btn.addEventListener("click", function () {
            document.getElementById("projectModalLabel").textContent = this.getAttribute("data-title");
            document.getElementById("projectModalImg").src = this.getAttribute("data-img");
            document.getElementById("projectModalDesc").textContent = this.getAttribute("data-desc");
            projectModal.show();
        });
    });

    // Ensure the close button closes the modal
    document.querySelector(".btn-close").addEventListener("click", function () {
        projectModal.hide();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll("#portfolio-flters li");
    const projects = document.querySelectorAll(".portfolio-item");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove("active"));
            this.classList.add("active");

            let filterValue = this.getAttribute("data-filter");

            projects.forEach(project => {
                if (filterValue === "*") {
                    project.style.display = "block"; // Show all
                } else {
                    if (project.classList.contains(filterValue.substring(1))) {
                        project.style.display = "block";
                    } else {
                        project.style.display = "none";
                    }
                }
            });
        });
    });
});


