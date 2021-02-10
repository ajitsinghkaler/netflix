import { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return <SelectProfileContainer setProfile={setProfile} user={user} />;
}
