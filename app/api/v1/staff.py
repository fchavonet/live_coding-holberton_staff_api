from flask_restx import fields, Namespace, Resource

api = Namespace("Staff", description="Management of Holberton staff members.")


staff_model = api.model("Staff", {
    "id": fields.Integer(required=True, description="Unique ID of the staff member."),
    "name": fields.String(required=True, description="First name."),
    "surname": fields.String(required=True, description="Last name."),
    "age": fields.Integer(required=True, description="Age."),
    "job": fields.String(required=True, description="Job title."),
})

# In-memory data storage.
staff_data = []


@api.route("/")
class StaffList(Resource):
    """
    Handle listing of staff members.
    """

    @api.expect(staff_model)
    @api.marshal_with(staff_model, code=201, description="Staff member successfully created.")
    @api.response(400, "A staff member with this ID already exists.")
    def post(self):
        """
        Create a new staff member (ID must be provided manually).
        """

        new_data = api.payload

        # Check for duplicate ID.
        if any(member["id"] == new_data["id"] for member in staff_data):
            api.abort(400, f"A staff member with ID {new_data['id']} already exists.")

        staff_data.append(new_data)

        return new_data, 201

    @api.marshal_list_with(staff_model)
    def get(self):
        """
        Return the list of all staff members.
        """

        return staff_data


@api.route("/<int:staff_id>")
class StaffMember(Resource):
    """
    Handle operations on a specific staff member.
    """

    @api.marshal_with(staff_model)
    @api.response(200, "Staff member found.")
    @api.response(404, "Staff member not found.")
    def get(self, staff_id):
        """
        Retrieve a staff member by their ID.
        """

        for member in staff_data:
            if member["id"] == staff_id:
                return member

        api.abort(404, "Staff member not found.")
