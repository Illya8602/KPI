// Reader entity
export interface Reader {
  id: number;
  firstName: string;
  lastName: string;
}

// Book entity
export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

// Booking entity
export interface Booking {
  id: number;
  startDate: Date;
  endDate: Date;
  readerId: number;
  bookId: number;
}

// Position entity
export interface Position {
  id: number;
  location: string;
  status: 'available' | 'borrowed' | 'reserved' | 'maintenance';
  bookId: number;
}

// Relations
export interface ReaderWithBookings extends Reader {
  bookings: Booking[];
}

export interface BookWithPositions extends Book {
  positions: Position[];
}
