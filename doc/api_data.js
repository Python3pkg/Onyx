define({ "api": [
  {
    "type": "post",
    "url": "/calendar",
    "title": "Add Event",
    "name": "addEvent",
    "group": "Calendar",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lieu",
            "description": "<p>Place of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "start",
            "description": "<p>Start date of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "stop",
            "description": "<p>Stop date of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of Event</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Calendar</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyExist",
            "description": "<p>This Event already Exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/CalendarController.py",
    "groupTitle": "Calendar"
  },
  {
    "type": "delete",
    "url": "/task",
    "title": "Delete Task",
    "name": "deleteTask",
    "group": "Calendar",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idCalendar",
            "description": "<p>Id of Calendar Event</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/TaskController.py",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/calendar",
    "title": "Request Events Information",
    "name": "getEvent",
    "group": "Calendar",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>List of Event</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "events.id",
            "description": "<p>Id of Event</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "events.title",
            "description": "<p>Title of Event</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "events.notes",
            "description": "<p>Notes of Event</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "events.lieu",
            "description": "<p>Place of Event</p>"
          },
          {
            "group": "200",
            "type": "datetime",
            "optional": false,
            "field": "events.start",
            "description": "<p>Start date of Event</p>"
          },
          {
            "group": "200",
            "type": "datetime",
            "optional": false,
            "field": "events.stop",
            "description": "<p>Stop date of Event</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "events.color",
            "description": "<p>Color of Event</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>No Event Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/CalendarController.py",
    "groupTitle": "Calendar"
  },
  {
    "type": "put",
    "url": "/calendar/:id",
    "title": "Update Event",
    "name": "updateEvent",
    "group": "Calendar",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "delete",
            "description": "<p>Delete an Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lieu",
            "description": "<p>Place of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of Event</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Calendar</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyExist",
            "description": "<p>This Event already Exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/CalendarController.py",
    "groupTitle": "Calendar"
  },
  {
    "type": "patch",
    "url": "/calendar",
    "title": "Update Date",
    "name": "updateEvent",
    "group": "Calendar",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "start",
            "description": "<p>Start date of Event</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "stop",
            "description": "<p>Stop date of Event</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "status",
            "description": "<p>Status of Update</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "status",
            "description": "<p>An error has occurred</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/CalendarController.py",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/install",
    "title": "Install Form",
    "name": "setInstall",
    "group": "Install",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Restart</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyExist",
            "description": "<p>This User already Exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/install/views.py",
    "groupTitle": "Install"
  },
  {
    "type": "get",
    "url": "/options",
    "title": "Request Options",
    "name": "getOptions",
    "group": "Options",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>Get Hostname of Server</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Get Platform of Server</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ram",
            "description": "<p>Get Ram of Server</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>Get IP of Server</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "disk",
            "description": "<p>Get Disk Used of Server</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "uptime",
            "description": "<p>Get Uptime of Server</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of User</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>Lang of User</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OptionsNotFound",
            "description": "<p>No Options Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/OptionsController.py",
    "groupTitle": "Options"
  },
  {
    "type": "post",
    "url": "/options",
    "title": "Change Options",
    "name": "setAccount",
    "group": "Options",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>Lang of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Option</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamNotFound",
            "description": "<p>No Param Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/OptionsController.py",
    "groupTitle": "Options"
  },
  {
    "type": "get",
    "url": "/shutdown",
    "title": "Shutdown Server",
    "name": "shutdown__",
    "group": "Shutdown",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "shutdown",
            "description": "<p>Close Server</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoPermission",
            "description": "<p>No Admin</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/OptionsController.py",
    "groupTitle": "Shutdown"
  },
  {
    "type": "post",
    "url": "/task",
    "title": "Add Task",
    "name": "addTask",
    "group": "Task",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "tasks.idCalendar",
            "description": "<p>Calendar Id of Task</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tasks.text",
            "description": "<p>Text of Task</p>"
          },
          {
            "group": "200",
            "type": "datetime",
            "optional": false,
            "field": "tasks.date",
            "description": "<p>Date of Task</p>"
          },
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "status",
            "description": "<p>Status</p>"
          },
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "calendar",
            "description": "<p>Calendar Boolean</p>"
          },
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "idCalendar",
            "description": "<p>Id of Calendar</p>"
          },
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          },
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Task</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyExist",
            "description": "<p>This Task already Exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/TaskController.py",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/task",
    "title": "Get Task Information",
    "name": "getTask",
    "group": "Task",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>List of Task</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Id of Task</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "tasks.idCalendar",
            "description": "<p>Calendar Id of Task</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tasks.text",
            "description": "<p>Text of Task</p>"
          },
          {
            "group": "200",
            "type": "datetime",
            "optional": false,
            "field": "tasks.date",
            "description": "<p>Date of Task</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TaskNotFound",
            "description": "<p>No Task Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/TaskController.py",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/transport/metro/:string",
    "title": "Get Metro Info",
    "name": "getMetro",
    "group": "Transport___Metro",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Metro</p>"
          },
          {
            "group": "200",
            "type": "select",
            "optional": false,
            "field": "station",
            "description": "<p>Get Station</p>"
          },
          {
            "group": "200",
            "type": "select",
            "optional": false,
            "field": "direction",
            "description": "<p>Get Direction</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoName",
            "description": "<p>No Metro Name Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/TransportController.py",
    "groupTitle": "Transport___Metro"
  },
  {
    "type": "post",
    "url": "/transport/metro/:string",
    "title": "Get Metro Schedule Info",
    "name": "serMetro",
    "group": "Transport___Metro",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Metro</p>"
          },
          {
            "group": "Parameter",
            "type": "select",
            "optional": false,
            "field": "station",
            "description": "<p>Station</p>"
          },
          {
            "group": "Parameter",
            "type": "select",
            "optional": false,
            "field": "direction",
            "description": "<p>Direction</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Schedule Result</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result.horaire",
            "description": "<p>Metro Schedule</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Metro Station</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoExist",
            "description": "<p>No Schedule Exist for This Station</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/TransportController.py",
    "groupTitle": "Transport___Metro"
  },
  {
    "type": "get",
    "url": "/transport/rer/:string",
    "title": "Get Rer Info",
    "name": "getRer",
    "group": "Transport___RER",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of RER</p>"
          },
          {
            "group": "200",
            "type": "select",
            "optional": false,
            "field": "station",
            "description": "<p>Get Station</p>"
          },
          {
            "group": "200",
            "type": "select",
            "optional": false,
            "field": "direction",
            "description": "<p>Get Direction</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoName",
            "description": "<p>No Rer Name Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/TransportController.py",
    "groupTitle": "Transport___RER"
  },
  {
    "type": "post",
    "url": "/transport/rer/:string",
    "title": "Get Rer Schedule Info",
    "name": "serRer",
    "group": "Transport___RER",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of RER</p>"
          },
          {
            "group": "Parameter",
            "type": "select",
            "optional": false,
            "field": "station",
            "description": "<p>Station</p>"
          },
          {
            "group": "Parameter",
            "type": "select",
            "optional": false,
            "field": "direction",
            "description": "<p>Direction</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Schedule Result</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result.horaire",
            "description": "<p>Rer Schedule</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Rer Station</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoExist",
            "description": "<p>No Schedule Exist for This Rer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/TransportController.py",
    "groupTitle": "Transport___RER"
  },
  {
    "type": "get",
    "url": "/maj",
    "title": "Update Onyx",
    "name": "maj__",
    "group": "Update",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "update",
            "description": "<p>Update Onyx</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoPermission",
            "description": "<p>No Admin</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoPip",
            "description": "<p>No Pip Install</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/OptionsController.py",
    "groupTitle": "Update"
  },
  {
    "type": "post",
    "url": "/account/change",
    "title": "Update Account",
    "name": "changeAccount",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect To Change Account</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/account/delete/:id",
    "title": "Delete User",
    "name": "deleteAccount",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect To Manage Account</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/account/manage",
    "title": "Manage User",
    "name": "manageAccount",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Get All User Information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/account/change",
    "title": "Manage Account",
    "name": "manageAccountGet",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Get User Information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/account/delete/:id",
    "title": "Update User",
    "name": "manageUser",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect To Manage Account</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/account/manage/:id",
    "title": "Manage User",
    "name": "manageUserGet",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Get User Information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login User",
    "name": "registerUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifpassword",
            "description": "<p>User Verification Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Hello</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyExist",
            "description": "<p>This User already Exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a User",
    "name": "registerUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifpassword",
            "description": "<p>User Verification Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "redirect",
            "description": "<p>Redirect to Hello</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyExist",
            "description": "<p>This User already Exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/auth/views.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/wiki",
    "title": "Request Wiki Article",
    "name": "getArticle",
    "group": "Wiki",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search Input</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "article",
            "description": "<p>List</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "article.head",
            "description": "<p>Header of Article</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "article.url",
            "description": "<p>Url of Article</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "article.summary",
            "description": "<p>Article Content</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoExist",
            "description": "<p>No Article Exist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "onyx/core/controllers/base/views/WikiController.py",
    "groupTitle": "Wiki"
  }
] });
