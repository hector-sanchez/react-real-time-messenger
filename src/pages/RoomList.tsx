import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { useChatStore, type Room } from "../store/chatStore";
import { Link } from "react-router";

async function fetchRooms(): Promise<Room[]> {
	const { data, error } = await supabase
		.from("rooms")
		.select("*")
		.order("created_at", { ascending: true });

	if (error) throw new Error(error.message);
	return data as Room[];
}

export default function RoomList() {
	const {
		data: rooms,
		error,
		isLoading,
	} = useQuery({ queryKey: ["rooms"], queryFn: fetchRooms });

	const handleJoiningRoom = (room: Room): void => {
		useChatStore.getState().setCurrentRoom(room);
	};

	if (isLoading) {
		return <p className="loader-text">Loading rooms...</p>;
	}

	if (error) {
		return <p className="loader-text">Error loading rooms: {error.message}</p>;
	}

	return (
		<div className="room-list">
			<h2>Available Rooms</h2>
			<ul>
				{rooms?.map((room: Room, key) => {
					return (
						<li key={key}>
							<Link
								to={"/"}
								onClick={() => handleJoiningRoom(room)}
							>
								{room.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
