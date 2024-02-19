function RoleRendering() {
    const role = useContext(RoleContext);
  
    if (role === 'teacher') {
      return (
        <>
        <Layoyt/>
          <GroupDetail />
          <Note />
        </>
      );
    } else if (role === 'student') {
      return (
        <>
          <GroupDetailClass />
        </>
      );
    } 
  }
  