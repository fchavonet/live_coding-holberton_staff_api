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

    @api.marshal_list_with(staff_model)
    def get(self):
        """
        Return the list of all staff members.
        """

        return staff_data
