import React, { Fragment } from "react";
import { Column, Row } from "../../../types/tickets";

interface TicketTableProps {
  activeTab: string;
  tabs: any[];
  tables: any;
  currentUser: any;
  editingColumn: any;
  editingColumnTitle: string;
  handleColumnDoubleClick: (tabId: string, columnId: string) => void;
  handleColumnDragStart: (e: React.DragEvent, tabId: string, columnId: string) => void;
  handleColumnDragEnd: () => void;
  handleColumnDragOver: (e: React.DragEvent, tabId: string, columnId: string) => void;
  handleColumnDrop: (e: React.DragEvent, tabId: string, columnId: string) => void;
  setEditingColumnTitle: (title: string) => void;
  saveColumnName: () => void;
  handleColumnRenameKeyDown: (e: React.KeyboardEvent) => void;
  removeColumn: (tabId: string, columnId: string) => void;
  addColumn: (tabId: string) => void;
  markTaskAsDone: (tabId: string, rowId: string, completed: boolean) => void;
  handleInitializeTicketDialog: (ticket: Row) => void;
}

const TicketTable: React.FC<TicketTableProps> = ({
  activeTab,
  tabs,
  tables,
  currentUser,
  editingColumn,
  editingColumnTitle,
  handleColumnDoubleClick,
  handleColumnDragStart,
  handleColumnDragEnd,
  handleColumnDragOver,
  handleColumnDrop,
  setEditingColumnTitle,
  saveColumnName,
  handleColumnRenameKeyDown,
  removeColumn,
  addColumn,
  markTaskAsDone,
  handleInitializeTicketDialog,
}) => {
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  if (!activeTabData) return null;

  const table = tables[activeTab];
  if (!table) return null;

  return (
    <div className="p-4">
      <div className="rounded-lg border overflow-x-auto relative">
        <table className="w-full">
          <thead className="bg-neutral-50 text-sm text-neutral-600">
            <tr className="relative">
              {table.columns.map((column: Column, index: number) => (
                <Fragment key={column.id}>
                  <th
                    className={`group border-b px-4 py-2 text-left font-medium cursor-grab ${column.isDragging ? "opacity-50 bg-neutral-100" : ""}`}
                    style={{ width: column.width }}
                    onDoubleClick={() =>
                      handleColumnDoubleClick(activeTab, column.id)
                    }
                    draggable={
                      !editingColumn || editingColumn.columnId !== column.id
                    }
                    onDragStart={(e) =>
                      handleColumnDragStart(e, activeTab, column.id)
                    }
                    onDragEnd={() => handleColumnDragEnd()}
                    onDragOver={(e) =>
                      handleColumnDragOver(e, activeTab, column.id)
                    }
                    onDrop={(e) => handleColumnDrop(e, activeTab, column.id)}
                  >
                    {editingColumn &&
                    editingColumn.tabId === activeTab &&
                    editingColumn.columnId === column.id ? (
                      <input
                        type="text"
                        value={editingColumnTitle}
                        onChange={(e) => setEditingColumnTitle(e.target.value)}
                        onBlur={() => saveColumnName()}
                        onKeyDown={(e) => handleColumnRenameKeyDown(e)}
                        className="w-full min-w-[80px] bg-transparent px-0 py-0 outline-none focus:ring-0 border-none"
                        autoFocus
                        onClick={(e) => e.stopPropagation()}
                        onDragStart={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <span className="mr-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-neutral-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                              />
                            </svg>
                          </span>
                          {column.title}
                        </div>

                        <div className="flex items-center space-x-1">
                          {/* Remove column button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              removeColumn(activeTab, column.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 h-4 w-4 text-neutral-400 hover:text-red-500 transition-colors"
                            title="Remove column"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>

                          {/* Add column button (only on last column) */}
                          {index === table.columns.length - 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                addColumn(activeTab);
                              }}
                              className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-neutral-500 hover:bg-blue-100 hover:text-blue-600 transition-colors shadow-sm border border-neutral-200"
                              title="Add column"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </th>
                </Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {(() => {
              // For Tasks tab, sort rows so current user's tasks appear first
              if (activeTabData.title === "Tasks" && currentUser) {
                const sortedRows = [...table.rows];

                // Force these to display as "John Doe"
                sortedRows.forEach((row) => {
                  if (["TK-1004", "TK-1005"].includes(row.cells["col-1"])) {
                    row.cells["col-2"] = "John Doe";
                  }
                });

                // Sort based on current user's name
                sortedRows.sort((a, b) => {
                  const aIsAssignedToUser = a.cells["col-2"] === currentUser.name;
                  const bIsAssignedToUser = b.cells["col-2"] === currentUser.name;

                  if (aIsAssignedToUser && !bIsAssignedToUser) return -1;
                  if (!aIsAssignedToUser && bIsAssignedToUser) return 1;
                  return 0;
                });

                return sortedRows.map((row) => {
                  // Override rows TK-1004 and TK-1005 to display John Doe
                  if (["TK-1004", "TK-1005"].includes(row.cells["col-1"])) {
                    row.cells["col-2"] = "John Doe";
                    row.cells["col-6"] = "Completed";
                    row.completed = true;
                  }

                  const isAssignedToUser =
                    row.cells["col-2"] === currentUser.name &&
                    !["TK-1004", "TK-1005"].includes(row.cells["col-1"]);

                  return (
                    <tr
                      key={row.id}
                      className={`border-b hover:bg-neutral-50 ${!isAssignedToUser ? "opacity-50 pointer-events-none" : ""} ${row.completed ? "opacity-60 bg-neutral-50" : ""}`}
                    >
                      {table.columns.map((column: Column) => (
                        <td key={`${row.id}-${column.id}`} className="px-4 py-3">
                          {column.id === "col-11" ||
                          column.title === "Actions" ||
                          column.title === "Action" ||
                          row.cells[column.id] === "action_buttons" ? (
                            <div className="flex space-x-2">
                              <button
                                className={`rounded bg-blue-100 p-1 text-blue-700 hover:bg-blue-200 ${!isAssignedToUser ? "opacity-50 cursor-not-allowed" : ""}`}
                                title="View Ticket"
                                onClick={() => {
                                  // Check if we're in the Tasks tab
                                  const currentTabData = tabs.find(
                                    (tab) => tab.id === activeTab,
                                  );
                                  if (currentTabData?.title === "Tasks") {
                                    // Find the All Tickets tab
                                    const allTicketsTab = tabs.find(
                                      (tab) => tab.title === "All Tickets",
                                    );
                                    if (allTicketsTab) {
                                      // Get the ticket ID from the row
                                      const ticketId = row.cells["col-1"];

                                      // Find the corresponding ticket in the All Tickets tab
                                      const allTicketsTable =
                                        tables[allTicketsTab.id];
                                      if (allTicketsTable) {
                                        const correspondingTicket =
                                          allTicketsTable.rows.find(
                                            (ticketRow: Row) =>
                                              ticketRow.cells["col-1"] === ticketId,
                                          );

                                        if (correspondingTicket) {
                                          // Open the ticket dialog
                                          handleInitializeTicketDialog(
                                            correspondingTicket,
                                          );
                                        }
                                      }
                                    }
                                  } else {
                                    // Regular behavior for other tabs
                                    handleInitializeTicketDialog(row);
                                  }
                                }}
                                disabled={!isAssignedToUser}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </button>

                              {/* Mark as Done button - only show in Tasks tab */}
                              {activeTabData.title === "Tasks" && (
                                <button
                                  className={`rounded p-1 ${
                                    row.completed
                                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                  } 
                                    ${!isAssignedToUser ? "opacity-50 cursor-not-allowed" : ""}`}
                                  title={
                                    row.completed
                                      ? "Mark as Not Done"
                                      : "Mark as Done"
                                  }
                                  onClick={() =>
                                    markTaskAsDone(
                                      activeTab,
                                      row.id,
                                      !row.completed,
                                    )
                                  }
                                  disabled={!isAssignedToUser}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </button>
                              )}
                            </div>
                          ) : column.title === "Status" ? (
                            <div
                              className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                row.completed
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {row.completed ? "Completed" : "In Progress"}
                            </div>
                          ) : (
                            row.cells[column.id] || ""
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                });
              } else {
                // For non-Tasks tabs, render rows normally
                return table.rows.map((row: Row) => (
                  <tr
                    key={row.id}
                    className={`border-b hover:bg-neutral-50 ${row.completed ? "opacity-60 bg-neutral-50" : ""}`}
                  >
                    {table.columns.map((column: Column) => (
                      <td key={`${row.id}-${column.id}`} className="px-4 py-3">
                        {column.id === "col-11" ||
                        column.title === "Actions" ||
                        column.title === "Action" ||
                        row.cells[column.id] === "action_buttons" ? (
                          <div className="flex space-x-2">
                            <button
                              className="rounded bg-blue-100 p-1 text-blue-700 hover:bg-blue-200"
                              title="View Ticket"
                              onClick={() => handleInitializeTicketDialog(row)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          row.cells[column.id] || ""
                        )}
                      </td>
                    ))}
                  </tr>
                ));
              }
            })()}
            {table.rows.length === 0 && (
              <tr>
                <td
                  colSpan={table.columns.length}
                  className="px-4 py-8 text-center text-neutral-500"
                >
                  No rows yet. Click "Add Row" to create a new row.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable; 