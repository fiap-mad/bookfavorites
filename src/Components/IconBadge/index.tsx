import { TouchableOpacity } from "react-native";
import { Badge, IconButton } from "react-native-paper";
import { styles } from "./styles";

type IconBadgeProps = {
  icon: string;
  count?: string;
  onPress: () => void;
};

const IconBadge = ({ icon, count, onPress }: IconBadgeProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconButton icon={icon} />
      {count && <Badge style={styles.badge}>{count}</Badge>}
    </TouchableOpacity>
  );
};

export default IconBadge;
