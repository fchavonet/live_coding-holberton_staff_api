// API endpoint URL.
const apiUrl = "/api/v1/staff/";

// Modal DOM elements.
const editModal = document.getElementById("edit-modal");
const confirmDeleteModal = document.getElementById("confirm-delete-modal");

// Bootstrap modal instances.
const bootstrapEditModal = new bootstrap.Modal(editModal);
const bootstrapConfirmDeleteModal = new bootstrap.Modal(confirmDeleteModal);

// State variables.
let allStaff = [];
let idToDelete = null;

// Fix for aria-hidden warning: blur active element when a modal is being closed.
[editModal, confirmDeleteModal].forEach(function (modalElement) {
  modalElement.addEventListener("hide.bs.modal", function () {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  });
});

// Fetch staff data from the API and render it.
function fetchStaff() {
  fetch(apiUrl)
    .then(function (result) { return result.json(); })
    .then(function (data) { allStaff = data; applyFilters(); })
    .catch(function (error) { console.error("Fetch error:", error); });
}

// Generate staff member cards in the UI.
function generateStaffCards(staffArray) {
  const staffCard = document.getElementById("staff-card");
  staffCard.innerHTML = "";

  staffArray.forEach(function (staff) {
    const column = document.createElement("div");
    column.className = "col-md-6 col-lg-4";

    column.innerHTML = `
			<div class="h-100 p-3 card d-flex flex-column justify-content-between">
				<div>
					<p class="badge mb-4 text-bg-warning">#${staff.id}</p>
					<h5 class="card-title mb-0">${staff["first-name"]} ${staff["last-name"]}</h5>
					<p class="mb-1 text-muted">${staff["job-title"]}</p>
					<p><strong>Age:</strong> ${staff.age}</p>
				</div>

				<div class="d-flex justify-content-end align-items-center gap-2">
					<button class="btn btn-sm btn-primary" onclick="openEdit(${staff.id})">
						<i class="bi bi-pencil-square"></i>
					</button>

					<button class="btn btn-sm btn-danger" onclick="deleteStaff(${staff.id})">
						<i class="bi bi-trash"></i>
					</button>
				</div>
			</div>
		`;

    staffCard.appendChild(column);
  });
}

// Update statistics counters.
function updateStats(staffArray) {
  const total = staffArray.length;
  let totalAge = 0;

  for (let i = 0; i < staffArray.length; i++) {
    totalAge += staffArray[i].age;
  }

  let average = 0;

  if (total > 0) {
    average = Math.round(totalAge / total);
  }

  document.getElementById("staff-count").textContent = total;
  document.getElementById("average-age").textContent = average;
}

// Apply search filtering and sorting.
function applyFilters() {
  const searchInputValue = document.getElementById("search-input").value.toLowerCase();
  const sortSelectValue = document.getElementById("sort-select").value;

  const filtered = [];

  for (let i = 0; i < allStaff.length; i++) {
    const staff = allStaff[i];
    const firstName = staff["first-name"].toLowerCase();
    const lastName = staff["last-name"].toLowerCase();
    const jobTitle = staff["job-title"].toLowerCase();

    if (firstName.includes(searchInputValue) || lastName.includes(searchInputValue) || jobTitle.includes(searchInputValue)) {
      filtered.push(staff);
    }
  }

  filtered.sort(function (a, b) {
    if (typeof a[sortSelectValue] === "string" && typeof b[sortSelectValue] === "string") {
      return a[sortSelectValue].localeCompare(b[sortSelectValue]);
    } else {
      return a[sortSelectValue] - b[sortSelectValue];
    }
  });

  generateStaffCards(filtered);
  updateStats(filtered);
}

// Handle new staff form submission.
document.getElementById("staff-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const newStaff = {
    id: parseInt(document.getElementById("id").value),
    "first-name": document.getElementById("first-name").value,
    "last-name": document.getElementById("last-name").value,
    age: parseInt(document.getElementById("age").value),
    "job-title": document.getElementById("job-title").value
  };

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStaff)
  })
    .then(function (result) {
      if (result.ok) {
        document.getElementById("staff-form").reset();
        fetchStaff();
      }
    })
    .catch(function (error) {
      console.error("Error adding staff:", error);
    });
});

// Open the delete confirmation modal.
window.deleteStaff = function (id) {
  idToDelete = id;
  bootstrapConfirmDeleteModal.show();
};

// Confirm and execute deletion.
document.getElementById("confirm-delete-btn").addEventListener("click", function () {
  if (idToDelete !== null) {
    fetch(apiUrl + idToDelete, { method: "DELETE" })
      .then(function () {
        bootstrapConfirmDeleteModal.hide();
        idToDelete = null;
        fetchStaff();
      })
      .catch(function (error) {
        console.error("Delete error:", error);
      });
  }
});

// Open the edit modal and populate fields.
window.openEdit = function (id) {
  fetch(apiUrl + id)
    .then(function (result) { return result.json(); })
    .then(function (staff) {
      document.getElementById("edit-id").value = staff.id;
      document.getElementById("edit-first-name").value = staff["first-name"];
      document.getElementById("edit-last-name").value = staff["last-name"];
      document.getElementById("edit-age").value = staff.age;
      document.getElementById("edit-job-title").value = staff["job-title"];
      bootstrapEditModal.show();
    });
};

// Handle staff edit form submission.
document.getElementById("edit-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const updatedStaff = {
    id: parseInt(document.getElementById("edit-id").value),
    "first-name": document.getElementById("edit-first-name").value,
    "last-name": document.getElementById("edit-last-name").value,
    age: parseInt(document.getElementById("edit-age").value),
    "job-title": document.getElementById("edit-job-title").value
  };

  fetch(apiUrl + updatedStaff.id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedStaff)
  })
    .then(function (result) {
      if (result.ok) {
        bootstrapEditModal.hide();
        fetchStaff();
      }
    })
    .catch(function (error) {
      console.error("Edit error:", error);
    });
});

// Bind search and sort events.
document.getElementById("search-input").addEventListener("input", applyFilters);
document.getElementById("sort-select").addEventListener("change", applyFilters);

// Initial data load.
fetchStaff();

