import { Layouts } from "react-grid-layout";
import { Widget } from "../types/tickets";

export const defaultTicketWidgets: Widget[] = [
  {
    id: "widget-1747758922081-status",
    type: "field_status",
    title: "Status",
    field: "status",
    fieldType: "select",
    options: [
      "Completed",
      "Awaiting for Parts",
      "New",
      "Open",
      "Awaiting Customer Response",
      "Declined",
      "In Progress"
    ],
    collapsed: false
  },
  {
    id: "widget-1747758922081-customer",
    type: "field_customer_name",
    title: "Customer",
    field: "customerName",
    fieldType: "text-readonly",
    collapsed: false,
    value: "AT Hydraulics (WA) Pty Limited"
  },
  {
    id: "widget-1747758922082-date-created",
    type: "field_date_created",
    title: "Date Created",
    field: "dateCreated",
    fieldType: "text-readonly",
    collapsed: false,
    value: "Juan de la Cruz"
  },
  {
    id: "widget-1747758922082-last-modified",
    type: "field_last_modified",
    title: "Last Modified",
    field: "lastModified",
    fieldType: "text-readonly",
    collapsed: false,
    value: "5/21/2025"
  },
  {
    id: "widget-1747758922082-billable-hours",
    type: "field_billable_hours",
    title: "Billable Hours",
    field: "billableHours",
    fieldType: "number",
    collapsed: false,
    value: "6"
  },
  {
    id: "widget-1747758922082-total-hours",
    type: "field_total_hours",
    title: "Total Hours",
    field: "totalHours",
    fieldType: "number",
    collapsed: false,
    value: "7"
  },
  {
    id: "widget-1747758922082-description",
    type: "field_description",
    title: "Description",
    field: "description",
    fieldType: "textarea",
    collapsed: false,
    value: "test"
  },
  {
    id: "widget-1747758922082-assignee-table",
    type: "field_assignee_table",
    title: "Team Members",
    field: "assigneeTable",
    fieldType: "table",
    collapsed: false
  },
  {
    id: "widget-1747758922082-time-entries-table",
    type: "field_time_entries_table",
    title: "Time Entries",
    field: "timeEntriesTable",
    fieldType: "table",
    collapsed: false
  },
  {
    id: "widget-1747758922082-attachments-gallery",
    type: "field_attachments_gallery",
    title: "Attachments",
    field: "attachmentsGallery",
    fieldType: "gallery",
    collapsed: false
  }
];

export const defaultTicketLayouts: Layouts = {
  lg: [
    {
      w: 2,
      h: 2,
      x: 0,
      y: 0,
      i: "widget-1747758922081-status",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 2,
      y: 0,
      i: "widget-1747758922081-customer",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 0,
      y: 2,
      i: "widget-1747758922082-date-created",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 2,
      y: 2,
      i: "widget-1747758922082-last-modified",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 4,
      y: 0,
      i: "widget-1747758922082-billable-hours",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 4,
      y: 2,
      i: "widget-1747758922082-total-hours",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 4,
      x: 6,
      y: 0,
      i: "widget-1747758922082-description",
      minW: 2,
      minH: 3,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 9,
      x: 0,
      y: 4,
      i: "widget-1747758922082-assignee-table",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 9,
      x: 6,
      y: 4,
      i: "widget-1747758922082-time-entries-table",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 12,
      h: 5,
      x: 0,
      y: 13,
      i: "widget-1747758922082-attachments-gallery",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    }
  ],
  md: [
    {
      w: 2,
      h: 2,
      x: 0,
      y: 0,
      i: "widget-1747758922081-status",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 2,
      y: 0,
      i: "widget-1747758922081-customer",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 0,
      y: 2,
      i: "widget-1747758922082-date-created",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 2,
      y: 2,
      i: "widget-1747758922082-last-modified",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 4,
      y: 2,
      i: "widget-1747758922082-billable-hours",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 2,
      h: 2,
      x: 4,
      y: 0,
      i: "widget-1747758922082-total-hours",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 4,
      x: 6,
      y: 0,
      i: "widget-1747758922082-description",
      minW: 2,
      minH: 3,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 12,
      h: 7,
      x: 0,
      y: 4,
      i: "widget-1747758922082-assignee-table",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 12,
      h: 8,
      x: 0,
      y: 11,
      i: "widget-1747758922082-time-entries-table",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 12,
      h: 5,
      x: 0,
      y: 19,
      i: "widget-1747758922082-attachments-gallery",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    }
  ],
  sm: [
    {
      i: "widget-1747758922081-status",
      x: 0,
      y: 0,
      w: 6,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922081-customer",
      x: 6,
      y: 0,
      w: 6,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-date-created",
      x: 0,
      y: 2,
      w: 6,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-last-modified",
      x: 6,
      y: 2,
      w: 6,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-billable-hours",
      x: 0,
      y: 4,
      w: 6,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-total-hours",
      x: 6,
      y: 4,
      w: 6,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-description",
      x: 0,
      y: 6,
      w: 12,
      h: 4,
      minW: 2,
      minH: 3,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-assignee-table",
      x: 0,
      y: 10,
      w: 12,
      h: 5,
      minW: 4,
      minH: 4,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-time-entries-table",
      x: 0,
      y: 15,
      w: 12,
      h: 5,
      minW: 4,
      minH: 4,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-attachments-gallery",
      x: 0,
      y: 20,
      w: 12,
      h: 5,
      minW: 4,
      minH: 4,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    }
  ],
  xs: [
    {
      w: 6,
      h: 2,
      x: 0,
      y: 0,
      i: "widget-1747758922081-status",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 2,
      x: 0,
      y: 2,
      i: "widget-1747758922081-customer",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 2,
      x: 0,
      y: 4,
      i: "widget-1747758922082-date-created",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 2,
      x: 0,
      y: 6,
      i: "widget-1747758922082-last-modified",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 2,
      x: 0,
      y: 8,
      i: "widget-1747758922082-billable-hours",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 2,
      x: 0,
      y: 10,
      i: "widget-1747758922082-total-hours",
      minW: 2,
      minH: 2,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 4,
      x: 0,
      y: 12,
      i: "widget-1747758922082-description",
      minW: 2,
      minH: 3,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 5,
      x: 0,
      y: 16,
      i: "widget-1747758922082-assignee-table",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 5,
      x: 0,
      y: 21,
      i: "widget-1747758922082-time-entries-table",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      w: 6,
      h: 5,
      x: 0,
      y: 26,
      i: "widget-1747758922082-attachments-gallery",
      minW: 4,
      minH: 4,
      static: false,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    }
  ],
  xxs: [
    {
      i: "widget-1747758922081-status",
      x: 0,
      y: 0,
      w: 4,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922081-customer",
      x: 4,
      y: 0,
      w: 4,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-date-created",
      x: 0,
      y: 2,
      w: 4,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-last-modified",
      x: 4,
      y: 2,
      w: 4,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-billable-hours",
      x: 0,
      y: 4,
      w: 4,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-total-hours",
      x: 4,
      y: 4,
      w: 4,
      h: 2,
      minW: 2,
      minH: 2,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-description",
      x: 0,
      y: 6,
      w: 4,
      h: 4,
      minW: 2,
      minH: 3,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-assignee-table",
      x: 0,
      y: 10,
      w: 4,
      h: 5,
      minW: 4,
      minH: 4,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-time-entries-table",
      x: 0,
      y: 15,
      w: 4,
      h: 5,
      minW: 4,
      minH: 4,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    },
    {
      i: "widget-1747758922082-attachments-gallery",
      x: 0,
      y: 20,
      w: 4,
      h: 5,
      minW: 4,
      minH: 4,
      resizeHandles: [
        "s",
        "w",
        "e",
        "n",
        "sw",
        "nw",
        "se",
        "ne"
      ]
    }
  ]
};

// Initialize the localStorage with default layouts
export const initializeDefaultLayouts = () => {
  if (typeof window !== 'undefined') {
    // Create the complete structure with both engineering-layouts and tab-tab-1
    const layouts = {
      "engineering-layouts": {
        widgets: defaultTicketWidgets,
        layouts: defaultTicketLayouts
      },
      "tab-tab-1": {
        widgets: defaultTicketWidgets,
        layouts: defaultTicketLayouts
      }
    };
    
    // Save to localStorage
    window.localStorage.setItem("rgl-ticket-layouts", JSON.stringify(layouts));
  }
}; 